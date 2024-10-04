import react from "react";
import { View, Text, TextInput, ImageBackground, TouchableOpacity,FlatList,Alert ,Platform} from 'react-native';
import { Colors } from "../../Global/Styling/Branding";
import GlobalStyles from "../../Global/Styling/GlobalStyles";
import HomeStyles from "../Home/HomeStyles";
import morning from '../../assets/images/morning.jpg'

import evening from '../../assets/images/evening.jpg'
import night from '../../assets/images/night.jpg'
import getCurrentTimeInfo from "../../Components/GlobalCalls/GetTimeZone";
import { Timestamp } from "firebase/firestore";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AudioPlayerGlobal from "../Audio/NewAudio";


function DailyVerse(){
  const { time, date, timeZone, partOfDay } = getCurrentTimeInfo();


  // console.log(time,date,timeZone,partOfDay)
  const item =     {
    "id":1,
          "Title":"Chapter 1",
          "Description":"Arjuna Vishada Yoga",
      "chapter": "Arjuna Vishada Yoga",
      "verses":
        {
          "verse_number": 1,
          "text": {
            "original": "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||",
            "translation": "Dhritarashtra said: O Sanjay, after gathering on the holy field of Kurukshetra, and desiring to fight, what did my sons and the sons of Pandu do?"
          },
          "commentary": "Here, King Dhritarashtra, who is blind, is inquiring from his minister Sanjaya about the events taking place on the battlefield of Kurukshetra, where his sons, the Kauravas, and the sons of Pandu, the Pandavas, have gathered for battle."
        }
    }

const shadow = {elevation:10,shadowColor:Colors.MainBgColor}

const bg_img = partOfDay === "morning"? morning:partOfDay==="evening"?evening: night
    
    return(
        <View style={GlobalStyles.container}>

          

          <ImageBackground
          source={bg_img}
          style={{width:"100%",height:200,marginBottom:20}}
          >
            <View style={{backgroundColor:"rgba(0,0,0,0.4)",height:"100%"}}>

           
<Text style={[HomeStyles.dailyVerseTitle,shadow]}>
Daily Verse
          </Text>


<View style={HomeStyles.SeperaterVerseScreen}>
<View style={[{alignItems:'flex-start'},shadow]}>
          <MaterialIcons name="sunny" size={35} color={Colors.PrimaryColor} style={shadow}/>
          <Text style={{color:Colors.lightTxtClr,fontSize:18}}>{partOfDay}</Text>
          <Text style={{color:Colors.lightTxtClr,fontSize:18}}>{timeZone}</Text>

          </View>

          <View style={[{alignItems:'flex-end'},shadow]}>
          <Ionicons name="timer-sharp" size={35} color={Colors.PrimaryColor} style={shadow}/>
          <Text style={{color:Colors.lightTxtClr,fontSize:18}}>{time}</Text>
          <Text style={{color:Colors.lightTxtClr,fontSize:18}}>{date}</Text>

          </View>
</View>
        
          </View>
          </ImageBackground>

<>
              <View 
             
              style={{backgroundColor:Colors.SecondaryDark,padding:20,borderRadius:20,marginBottom:20}}>
              
           
                <Text style={{fontSize:20,color:Colors.lightTxtClr,fontWeight:'bold',marginBottom:10}}>
                    <Text style={{color:Colors.PrimaryColor}}>
                    Verse {item.verses.verse_number}:  
                        </Text>
             
                    {item.verses.text.original}
                </Text>
                <Text style={{fontSize:20,color:Colors.lightTxtClr,fontWeight:'bold',marginBottom:10}}>
                    <Text style={{color:Colors.PrimaryColor}}>
                    Translation:  
                        </Text>
                        {item.verses.text.translation}
                </Text>
          
              </View>
       

      </>
      <AudioPlayerGlobal/>
      <Text style={{color:Colors.lightTxtClr,textAlign:'center'}}>
        We bring to you daily verses so that you can stay connected to spirtuality.
      </Text>

        </View>
    )
}
export default DailyVerse