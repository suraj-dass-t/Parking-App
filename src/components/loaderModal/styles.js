
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    activityIndicatorWrapper: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 20,
    },
    loadingText: {
      marginTop: 10,
      fontSize: 16,
      color:'black'
    },
  });

export default styles;
