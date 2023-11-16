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
    },
    modalText: {
      fontSize: 18,
      marginBottom: 10,
      color:'black',
      fontFamily:'bold'
    },
    modalText2: {
      marginBottom: 10,
      color:'black',
      fontFamily:'bold'
    },
    input: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      color:'black',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:'4%'
    },
    confirmButton: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      marginRight: 5,
    },
    cancelButton: {
      backgroundColor: '#e74c3c',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      marginLeft: 5,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
  export default styles;