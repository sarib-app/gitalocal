import { View, TextInput, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Colors } from '../../Global/Styling/Branding';

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('screen').height;

const ProgressStyles = StyleSheet.create({
Title:{
    fontSize:24,
    color:Colors.lightTxtClr,
    fontWeight:'bold',
    alignSelf:'center',
    marginVertical:20

},
StreakTxt:{
    fontSize:18,
    color:Colors.lightTxtClr,
    fontWeight:'bold',
},
StreakDescription:{
    color:"rgba(255,255,255,0.8)",
    marginTop:10
},
BasicWrapper:{
    width:WindowWidth/1.1,
    padding:20,
    backgroundColor:Colors.SecondaryDark,
    borderRadius:10,
    alignSelf:'center'
},
rowMaker:{
    width:WindowWidth/1.1,
    flexDirection:'row',alignSelf:'center',
    justifyContent:'space-between',
    marginBottom:20
    
},
ProgressBox:{
    width:WindowWidth/2.3,
    // height:200,
    paddingBottom:20,
    borderRadius:10,
    backgroundColor:Colors.SecondaryDark,
    // justifyContent:'center',
    alignItems:'center'
},
ProgressTitle:{
    color:Colors.lightTxtClr,
    fontSize:30,
    fontWeight:'bold'
},
progressDeswcription:{
    color:"rgba(255,255,255,0.8)",
    textAlign:'center',
    marginTop:20
},
RowMaker:{flexDirection:'row',alignItems:'center',marginTop:20,width:WindowWidth/3.2,justifyContent:'center'}
});
export default ProgressStyles  