import React, { useEffect, useState } from 'react';
import { View,Text,TouchableOpacity,ScrollView,FlatList } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import GlobalStyles from '../../Global/Styling/GlobalStyles';
import ProgressStyles from './ProgressStyles';
import { Colors } from '../../Global/Styling/Branding';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getWeeklyVerseCount } from '../../Components/GlobalCalls/getWeeklyVerseCount';
import { getUserStreak } from '../../Components/GlobalCalls/getUserStreak';
function WeeklyProgress(){

const focused = useIsFocused()
    const [verseCount,setVerseCount]=useState(0)
    const [streakCount,setstreakCount]=useState(0)


useEffect(()=>{
GetData()
},[focused])
    async function GetData(){

        const userData = await AsyncStorage.getItem("user")
        const ParsedUser = JSON.parse(userData)
        const response = await getUserStreak(ParsedUser.uid)
        
        if (response.success) {
            console.log(response.message);
            setstreakCount(response.streak)
          } else {
            console.error(response.message);
          }
        const res = await getWeeklyVerseCount(ParsedUser.uid)
        if (res.success) {
            console.log(res.message);
            setVerseCount(res.count)
          } else {
            console.error(res.message);
          }
      

      }

  
    return(
        <View style={GlobalStyles.container}>
            <Text style={ProgressStyles.Title}>
    Your Journey
</Text>
<View style = {ProgressStyles.BasicWrapper}>
<Text style={ProgressStyles.StreakTxt}>
🔥 Daily Streaks : {streakCount}
</Text>
<Text style={ProgressStyles.StreakDescription}> 
    Daily Streak goes on if you read verse daily and mark it as read, keep your reading journey and streaks going on 😇
</Text>
</View>
<Text style={[ProgressStyles.StreakTxt,{margin:20}]}>
Weekly Goal
</Text>



<View style={ProgressStyles.rowMaker}>
<View style={ProgressStyles.ProgressBox}>
<View style={[ProgressStyles.RowMaker,{justifyContent:'flex-start'}]}>
<Entypo name="star" size={28}  color={"#9BEEF1"} />
<Text style={[ProgressStyles.ProgressTitle,{fontSize:16,marginLeft:5}]}>
    Beginner
   
</Text>
</View>


<View style={ProgressStyles.RowMaker}>

<Text style={ProgressStyles.ProgressTitle}>
    {verseCount > 5 ? 5 : verseCount}/5 
   
</Text>

<Text style={{fontSize:12,color:Colors.PrimaryColor,marginBottom:20}}>
         {" "}/ completed
    </Text>
</View>
<Text style={ProgressStyles.progressDeswcription}>
    Read at-least<Text style={{color:Colors.PrimaryColor}}> 5 verses </Text>per week to reach beginner level.
</Text>

</View>

<View style={ProgressStyles.ProgressBox}>

<View style={[ProgressStyles.RowMaker,{justifyContent:'flex-start'}]}>
<Entypo name="star" size={28}  color={"#44D897"} />
<Text style={[ProgressStyles.ProgressTitle,{fontSize:16,marginLeft:5}]}>
Intermediate
   
</Text>
</View>


<View style={ProgressStyles.RowMaker}>

<Text style={ProgressStyles.ProgressTitle}>
{verseCount > 10 ? 10 : verseCount}/10 
   
</Text>

<Text style={{fontSize:12,color:Colors.PrimaryColor,marginBottom:20}}>
         {" "}/ completed
    </Text>
</View>
<Text style={ProgressStyles.progressDeswcription}>
    Read at-least<Text style={{color:Colors.PrimaryColor}}> 10 verses </Text>per week to reach intermediate level.
</Text>

</View>



</View>
<View style = {[ProgressStyles.BasicWrapper,{flexDirection:'row'}]}>
    <View style={{alignItems:'flex-start',width:"80%"}}>

    <View style={{alignItems:'center',flexDirection:'row'}}>
    <Entypo name="star" size={28} style={{marginRight:10}} color={Colors.PrimaryColor} />

    <Text style={ProgressStyles.StreakTxt}>
 Expert Level
</Text>
    </View>

<Text style={ProgressStyles.StreakDescription}> 
Read at-least<Text style={{color:Colors.PrimaryColor}}> 15 verses </Text>per week to reach Expert level.
</Text>
</View>
<View style={{backgroundColor:Colors.MainBgColor,borderRadius:1000,width:70,height:70,justifyContent:'center',alignItems:"center"}}>
    <Text style={[ProgressStyles.ProgressTitle,{fontSize:18}]}>{verseCount > 15 ? 15 : verseCount}/15</Text>
</View>
</View>

        </View>
    )
}
export default WeeklyProgress