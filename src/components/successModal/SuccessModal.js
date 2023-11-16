import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

const formatTimestamp = (timestamp) => {
  const dateObject = new Date(timestamp);
  return dateObject.toLocaleString();
};
const calculateDuration = (checkInTime) => {
  const currentTime = new Date();
  const checkInDate = new Date(checkInTime);
  const durationMilliseconds = currentTime - checkInDate;
  const hours = Math.floor(durationMilliseconds / (60 * 60 * 1000));
  const minutes = Math.floor((durationMilliseconds % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((durationMilliseconds % (60 * 1000)) / 1000);
  return { hours, minutes,seconds };
};

const SuccessModal = ({ isVisible, onClose, message,messageData,type }) => {
  const checkInTimestamp =messageData && messageData[2];
  const checkInTime = formatTimestamp(checkInTimestamp);
  const { hours, minutes, seconds } = calculateDuration(checkInTimestamp);
  
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalHeading}>{message}</Text>
          {messageData && (
  type == 'Check-in' ? (
    <Text style={styles.modalText}>Your vehicle numbered {messageData[3]} has been successfully checked-in.{'\n'}You can park your vehicle at {'\n'}Floor: {messageData[0]}, Slot: {messageData[1]}.{'\n'}Check-in time : {checkInTime}</Text>
  ) : (
    <Text style={styles.modalText}>Your vehicle numbered {messageData[3]} has been successfully checked-out.{'\n'}It was parked since: {checkInTime}.
   {'\n'}Duration: {hours} hours, {minutes} minutes, {seconds} seconds.</Text>
  )
)}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
