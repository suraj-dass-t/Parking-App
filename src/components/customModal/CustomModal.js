import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';
import styles from './styles';
const CustomModal = ({ isVisible, onClose, onConfirm, modalTitle }) => {
  const [textInputValue, setTextInputValue] = useState('');

  const handleConfirm = () => {
    if(textInputValue)
    {
        onConfirm(textInputValue);
        setTextInputValue('')
    onClose();
}
else
    ToastAndroid.show('Please Enter Vehicle number', ToastAndroid.SHORT);
  };

  const handleCancel = () => {
    onClose();
    setTextInputValue('')
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{modalTitle}</Text>
          <TextInput
            style={styles.input}
            value={textInputValue}
            onChangeText={(text) => setTextInputValue(text)}
            placeholder="Enter Vehicle number"
            placeholderTextColor={'black'}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
