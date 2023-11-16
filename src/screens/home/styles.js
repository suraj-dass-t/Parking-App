import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    innerContainer:{
      marginTop:'8%',
   height:'75%',
   width:'90%',
   elevation:100,
   borderRadius:30,
      alignItems: 'center',
      backgroundColor:'white'
    },
    innerContainer2: {
  justifyContent:'space-around',
  flex:1
    },
    icon: {
      marginTop:'2%',
  height:'25%',
  width:'38%',
  
    },
    text: {
      fontSize: 20,
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
      marginVertical: 10,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    indicator: {
      flex:1,
      justifyContent:'center',
        },
  });

  
export default styles;