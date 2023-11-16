
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      width: '80%',
      alignItems: 'center',
    },
    modalText: {
      fontSize: 16,
      marginBottom: 20,
      color:'black'
    },
    modalHeading: {
      fontSize: 20,
      fontWeight:'bold',
      marginBottom: 20,
      color:'black'
    },
    closeButton: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
      width: '80%',
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
  

  export default styles;
