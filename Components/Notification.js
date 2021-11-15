import React,{ useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Vibration,
} from "react-native";
import { Audio } from 'expo-av';
import TLBox from 'react-native-modal'

const Notification = () => {

  const [boxView, setboxView] = useState(false);

  const ClickOnBox = () => {
    setboxView(!boxView);
  };


  const ClickRingBell = async () => {
    const { sound } = await Audio.Sound.createAsync(require('./sound.mp3'));
    await sound.playAsync();
  };

  const ClickVibrate = () => {
    Vibration.vibrate(500);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={ClickOnBox}>
          <Text style={styles.touchableOpacityText}> On Click </Text>
        </TouchableOpacity>
     
      <TLBox isVisible={boxView}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={ClickRingBell}>
          <Text style={styles.touchableOpacityText}> ring a bell  </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchableOpacity, { marginTop: 20 }]}
          onPress={ClickVibrate}
        >
          <Text style={styles.touchableOpacityText}> vibrate </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableOpacity} onPress={ClickOnBox}>
          <Text style={styles.touchableOpacityText}> back </Text>
        </TouchableOpacity>
        </TLBox>
       
      </View>
    </SafeAreaView>
   
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },

  touchableOpacity: {
    alignItems: 'center',
    width: 300,
    backgroundColor: "#0091EA",
    padding: 20,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
  },

  touchableOpacityText: {
    fontSize: 30,
        color: "#FFFFFF",
        fontWeight: "bold",
  },

});


export default Notification;