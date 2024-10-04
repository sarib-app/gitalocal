import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet ,Text} from 'react-native';
import { Audio } from 'expo-av';
import { Colors } from '../../Global/Styling/Branding';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const AudioPlayer = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); // Unload sound when component unmounts
        }
      : undefined;
  }, [sound]);

  const playSound = async (sound) => {
    if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/audio/sample.mp3') // Replace with your audio file path
    );
    setSound(sound);

    playSound(sound);
  };

  return (
    <View
    style={{flexDirection:'row',alignItems:'center'}}
    >
    <Text style={{color:Colors.lightTxtClr,marginRight:10}}>
                 {!isPlaying ? "Play Audio":"Pause Audio"}
    
                  </Text>
                  {
                    isPlaying ? 
                    <FontAwesome  name="pause-circle" size={24} color={Colors.PrimaryColor} onPress={pauseSound}/>
:

      <AntDesign  name="play" size={24} color={Colors.PrimaryColor}  onPress={()=>{sound ? playSound(sound) :loadSound()}} />
                  }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AudioPlayer;
