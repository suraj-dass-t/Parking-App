import React, { useState,useEffect } from 'react';
import { View, Text, Alert, StyleSheet, ActivityIndicator,ToastAndroid,ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { styles } from "./styles";

const formatTimestamp = (timestamp) => {
  const dateObject = new Date(timestamp);
  return dateObject.toLocaleString();
};

const DetailsScreen = () => {
    const [isLoading,setIsLoading]=useState(false);
    const [vehicleData,setVehicleData]=useState([]);
    useEffect(() => {
      setIsLoading(true)
      const unsubscribe = firestore()
        .collection('VehicleData')
        .onSnapshot(querySnapshot => {
        const vehicle = [];
        querySnapshot.forEach(documentSnapshot => {
          const data = documentSnapshot.data();
          vehicle.push({
          number: data.number,
          slot: data.slot,
          level: data.level,
          time: data.time
          });
        });
        setVehicleData(vehicle);
        setIsLoading(false)
        },
        (error) => {
        console.error('Error fetching data:', error);
        ToastAndroid.show('Error Occured, please try again.', ToastAndroid.SHORT);
        setIsLoading(false); 
        }
        );
      return () => unsubscribe();
      }, []);
  return (
    <View style={styles.container}> 
      {isLoading ? (
				<View style={styles.indicator}>
        <ActivityIndicator size="large" color="green" />
		</View>
      ) : (
			<ScrollView style={styles.noteList}> 
				{vehicleData.length === 0 ? (
					<View style={styles.noNotes}>
    <Text style={styles.noNotesText} >No Vehicles found !!!</Text>
	</View>
  ) : (
				vehicleData.map((vehicle) => ( 
					<View 
						key={vehicle.number}  
					> 
						<Text style={styles.noteTitle}> 
							Vehicle Number: {vehicle.number},  Floor: {vehicle.level},  Slot: {vehicle.slot} {'\n'}
              Check-in Time: {formatTimestamp(vehicle.time)}	</Text> 
					</View> 
				)))} 
			</ScrollView> 
	  )}
    </View>
  );
};


export default DetailsScreen;
