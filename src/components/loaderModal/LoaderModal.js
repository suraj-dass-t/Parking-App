import React from 'react';
import { Modal, View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

const LoaderModal = ({ visible, text }) => {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={visible} color="green" size="large" />
          {text && <Text style={styles.loadingText}>{text}</Text>}
        </View>
      </View>
    </Modal>
  );
};

export default LoaderModal;
