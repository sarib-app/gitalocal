import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome6, Ionicons } from '@expo/vector-icons';
import LoginScreen from '../../Screens/Auth/Logins';
import SignUpScreen from '../../Screens/Auth/SignUp';
import { Colors } from '../../Global/Styling/Branding';
import HomeScreen from '../../Screens/Home/HomeScreen';
import Settings from '../../Screens/Settings/Settings';
import WeeklyProgress from '../../Screens/ReadingProgress.js/ReadingProgress';
import DailyVerse from '../../Screens/BookRender/DailyVerse';
import DailyAlerts from '../../Screens/DailyAlerts.js/DailyAlerts';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
            style: { backgroundColor: Colors.SecondaryDark },
           
        
          
        }}
        screenOptions={{
            tabBarStyle: { backgroundColor:Colors.SecondaryDark,height:70,borderTopWidth:0 ,paddingBottom:-10},
            tabBarActiveBackgroundColor:Colors.PrimaryColor,
            tabBarShowLabel:false,
          }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="book" size={24} color={"white"} />
            ),
            headerShown:false,
          }}
          
        />
          <Tab.Screen
          name="Progress"
          component={WeeklyProgress}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="ranking-star" size={24} color={"white"} />
            ),
            headerShown:false

          }}
        />
           <Tab.Screen
          name="Reading"
          component={DailyVerse}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="book-open-reader" size={24} color={"white"} />
            ),
            headerShown:false

          }}
        />
          <Tab.Screen
          name="Alerts"
          component={DailyAlerts}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="notifications" size={24} color={"white"} />
            ),
            headerShown:false

          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="setting" size={24} color={"white"} />
            ),
            headerShown:false

          }}
        />
      </Tab.Navigator>
  );
};

export default BottomNavigation;
