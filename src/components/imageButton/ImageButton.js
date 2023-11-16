import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';

const ImageButton = ({ onPress, imageSource, buttonText }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Image style={styles.buttonImage} source={imageSource} resizeMethod='resize' />
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default ImageButton;
