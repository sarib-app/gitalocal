import { View, TextInput, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Colors } from '../../Global/Styling/Branding';

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('screen').height;

const DailyAlertStyles = StyleSheet.create({
    container: {
        width: WindowWidth / 1.1,
        marginTop: 50,
        alignSelf: 'center'
    },
    title: {
        fontSize: 38,
        color: 'white',
        // marginBottom: 20,
        margin: 20,

        // alignSelf:'center'
        //   marginTop:20
    },
    listContainer:{
        width:WindowWidth/1.02,
        backgroundColor:Colors.SecondaryDark,
        padding:20,
        marginBottom:20
    },
    listTitle:{
        color:Colors.lightTxtClr,
        fontSize:16,
        fontWeight:"bold",

    },
    listDescription:{
        color:Colors.lightTxtClr,
        fontSize:14,
        fontWeight:"300",
    }
});
export default DailyAlertStyles  