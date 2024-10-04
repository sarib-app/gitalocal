import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';

const AudioPlayerGlobal = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); // Unload sound when component unmounts
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
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
    handlePlayPause(sound)
  };


  function handlePlay(){
    if(sound){
        handlePlayPause(sound)
    }else{
        loadSound()
    }
  }

  const handlePlayPause = async (sound) => {
    
    if (isPlaying) {
      await pauseSound();
    } else {
      await playSound(sound);
    }
  };

  const handlePrevious = () => {
    console.log('Previous button pressed');
    // Add logic for previous audio
  };

  const handleNext = () => {
    console.log('Next button pressed');
    // Add logic for next audio
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.controlButton} onPress={handlePrevious}>
        <FontAwesome name="backward" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.controlButton} onPress={handlePlay}>
        <FontAwesome name={isPlaying ? "pause" : "play"} size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.controlButton} onPress={handleNext}>
        <FontAwesome name="forward" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    margin: 10,
  },
  controlButton: {
    padding: 10,
  },
});

export default AudioPlayerGlobal;
