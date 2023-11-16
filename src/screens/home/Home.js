import React, { useState,useEffect } from 'react';
import { View, Text, Alert, StyleSheet, Image, ActivityIndicator, ToastAndroid } from 'react-native';
import ImageButton from '../../components/imageButton/ImageButton';
import CustomModal from '../../components/customModal/CustomModal';
import SuccessModal from '../../components/successModal/SuccessModal';
import LoaderModal from '../../components/loaderModal/LoaderModal';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [modalType, setModalType] = useState('');
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [isLoading,setIsLoading]=useState(false);
  const [successData, setSuccessData] = useState();

  useEffect(() => {
    if(successData)
    setSuccessModalVisible(true);
  }, [successData]); 

  const handleButtonPress = (type) => {
    setModalType(type);
    setModalVisible(true);
  };
  const handleConfirm = (text) => {
    setInputValue(text);
    setIsLoading(true);
    if(modalType=='Check-in')
    calculateCheckin(text)
else
handleExit(text)
  };
  const handleExit = async(text) => {
const data=await firestore().collection('VehicleData').doc(text).get();
if(data._data)
{
    console.log("Data._data: ",data._data.level)
    firestore()
    .collection('VehicleData')
    .doc(text)
    .delete()
    .then(() => {
        updateFloorData(data._data.level,data._data.slot,data._data.time,data._data.number)
    })
    .catch((error)=>{
      console.error('Error fetching data:', error);
              ToastAndroid.show('Error Occured, please try again.', ToastAndroid.SHORT);
              setIsLoading(false); 
    });
}
else{
    ToastAndroid.show('Entered Vehicle number is not found. Please make sure that you have entered correctly.', ToastAndroid.SHORT);
              setIsLoading(false); 
}
  };
  const calculateCheckin = async(text) => {
    const floorData = await firestore().collection('floorData').doc('floor').get();
    console.log(floorData._data)
    assignParkingSlot(floorData._data,text);
  };
  const assignParkingSlot = (parkingLevels,text) => {
    let selectedLevel = null;
    let selectedSlot = null;
    Object.keys(parkingLevels).forEach((level) => {
      const vacantSlots = parkingLevels[level];
      if (selectedLevel === null || vacantSlots > parkingLevels[selectedLevel]) {
        selectedLevel = level;
      }
    });
    if (selectedLevel !== null) {
      selectedSlot = 100 - parkingLevels[selectedLevel] + 1;
      checkIn(text,selectedLevel,selectedSlot);
    }
    else
    ToastAndroid.show('Sorry No Vacant slots available.', ToastAndroid.SHORT);
  };
const updateFloorData=(level,slot,time,number)=>{
    firestore()
  .collection('floorData')
  .doc('floor')
  .update({
    [level]: modalType==='Check-in' ? firestore.FieldValue.increment(-1) :firestore.FieldValue.increment(+1)
  })
  .then(() => {
    successMessage(level,slot,time,number);
	setIsLoading(false);
  })
  .catch((error)=>{
	console.error('Error fetching data:', error);
			ToastAndroid.show('Error Occured, please try again.', ToastAndroid.SHORT);
			setIsLoading(false); 
  });
}
  const checkIn = (text,level,slot) => {
    var timestamp = new Date().getTime();
    firestore()
  .collection('VehicleData')
  .doc(text)
  .get()
  .then((docSnapshot) => {
    if (docSnapshot.exists) {
      ToastAndroid.show('This Vehicle has been already checked-in. Please Check-out to check-in again.', ToastAndroid.SHORT);
      setIsLoading(false); 
    } else {
    firestore()
  .collection('VehicleData')
  .doc(text)
  .set({
    number:text ,
    time: timestamp,
    level:level,
    slot: slot
  })
  .then(() => {
	updateFloorData(level,slot,timestamp,text);
  })
  .catch((error)=>{
	console.error('Error fetching data:', error);
			ToastAndroid.show('Error Occured, please try again.', ToastAndroid.SHORT);
			setIsLoading(false); 
  });
}
})
.catch((error) => {
  console.error('Error checking document existence:', error);
  ToastAndroid.show('Error occurred, please try again.', ToastAndroid.SHORT);
  setIsLoading(false);
});
  };
  const successMessage = (level,slot,time,number) => {
    const value = [level, slot,time,number];
    console.log("Value: ",value)
    setSuccessData(value);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
    setInputValue('');
  };
  const handleSuccessClose = () => {
    setSuccessModalVisible(false);
  };
  return (
    <View style={styles.container}>
         <Image
         resizeMethod='resize'
        style={styles.icon}
        source={require('../../assets/images/mainIcon.png')}
      />
<View style={styles.innerContainer}>
 <View style={styles.innerContainer2}>
     <ImageButton
     onPress={() => handleButtonPress('Check-in')}
     imageSource={require('../../assets/images/check-in.png')}
     />
     <ImageButton
     onPress={() => handleButtonPress('Check-Out')}
     imageSource={require('../../assets/images/check-out.png')}
     />
     <ImageButton
     onPress={() => navigation.navigate('Details')}
     imageSource={require('../../assets/images/details.png')}
      />
      </View>
      </View>
     <CustomModal
        isVisible={modalVisible}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        modalTitle={modalType}
      />
      <SuccessModal
        isVisible={successModalVisible}
        onClose={handleSuccessClose}
        message={`${modalType} successful`}
        messageData={successData}
        type={modalType}
      />
       <LoaderModal visible={isLoading} text="Loading..." />
    </View>
  );
};

export default Home;
