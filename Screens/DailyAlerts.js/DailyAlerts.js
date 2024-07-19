import react from "react"
import { View,Text } from "react-native"
import GlobalStyles from "../../Global/Styling/GlobalStyles"
import HomeStyles from "../Home/HomeStyles"
import DailyAlertStyles from "./DailyAlertStyles"
import { FlatList } from "react-native-gesture-handler"
function DailyAlerts(){
    const notifData= [
        {
            id:1,
            title:"Subscription Successfull",
            body:"Your monthly subscription has successfully purchased!"
        },
        {
            id:2,
            title:"New Announcment",
            body:"We have launched some new features explore them and enjoy!"
        },
        {
            id:3,
            title:"Daily Verse",
            body:"Your daily verse is here please read it out and be at peace!"
        },
        {
            id:4,
            title:"Subscription Successfull",
            body:"Your monthly subscription has successfully purchased!"
        },
        {
            id:5,
            title:"Daily Verse",
            body:"Your daily verse is here please read it out and be at peace!"
        },
    ]


    const renderItems=({item}) => (
        <View style={DailyAlertStyles.listContainer}>
            <Text style={DailyAlertStyles.listTitle}>
                {item.title}
            </Text>
            <Text style={DailyAlertStyles.listDescription}>
                {item.body}
            </Text>
        </View>
    )
return(
    <View style={GlobalStyles.container}>
        <Text style={DailyAlertStyles.title}>
            Daily Alerts
        </Text>
        <FlatList
        data={notifData}
        renderItem={renderItems}
        />
    </View>
)
}
export default DailyAlerts