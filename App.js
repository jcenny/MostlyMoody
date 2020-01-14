import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { Header, Icon } from 'react-native-elements'
import Mood from './components/Mood.js';
import Waveform from './components/Waveform.js';
import Music from './components/Music.js';
import Month from './components/Month.js';
import Week from './components/Week.js'

export default function App() {
  const [weather, setWeather] = useState('55°F');
  const [moodVisible, changeMoodVisible] = useState(true);
  const [mainVisible, changeMainVisible] = useState(false);
  const [weekVisible, changeWeekVisible] = useState(false);
  const [monthVisible, changeMonthVisible] = useState(false);
  const [mood, setMood] = useState(0);
  const [year, setYear] = useState([]);
  const [song, setSong] = useState('https://kleiomainplayer.s3.us-west-1.amazonaws.com/songs/35.mp3');
  const [fill, setFill] = useState('#fff');
  const [week, setWeek] = useState([]);
  const [weatherIcon, setWeatherIcon] = useState('weather-cloudy')
  const duration = 200;
  const currentWeek = [
    { day: 'mon', mood: 6, degree: '55', weather: 'weather-cloudy' },
    { day: 'tue', mood: 7, degree: '59', weather: 'weather-fog' },
    { day: 'wed', mood: 9, degree: '57', weather: 'weather-sunny' },
    { day: 'thu', mood: 5, degree: '53', weather: 'weather-rainy' },
    { day: 'fri', mood: 6, degree: '52', weather: 'weather-windy' },
    { day: 'sat', mood: 7, degree: '61', weather: 'weather-sunny' }, 
    { day: 'sun', mood: 8, degree: '60', weather: 'weather-partlycloudy' }];

  // let yearMoods = [];
  // let weatherDesc = [ 'weather-cloudy', 'weather-fog', 'weather-hail', 'weather-lightning', 'weather-lightning-rainy', 'weather-partlycloudy', 'weather-pouring', 'weather-rainy', 'weather-snowy', 'weather-snowy-rainy', 'weather-sunny', 'weather-windy', 'weather-windy-variant']
  // let moodLevel = 0;
  // let yearObj = {};
  // for (let i = 0; i < 365; i ++) {
  //   var randomWeatherIndex = Math.floor((Math.random() * 13));
  //   moodLevel = Math.floor((Math.random() * 10) + 1);
  //   yearObj = { mood: moodLevel, weather: weatherDesc[randomWeatherIndex]}
  //   yearMoods.push(yearObj);
  // }
  var yearMoods = [{ mood: 2, weather: "weather-pouring" }, { mood: 9, weather: "weather-hail" }, { mood: 10, weather: "weather-partlycloudy" }, { mood: 5, weather: "weather-rainy" }, { mood: 10, weather: "weather-lightning" }, { mood: 3, weather: "weather-windy" }, { mood: 1, weather: "weather-snowy" }, { mood: 4, weather: "weather-windy-variant" }, { mood: 6, weather: "weather-windy" }, { mood: 9, weather: "weather-pouring" }, { mood: 2, weather: "weather-partlycloudy" }, { mood: 7, weather: "weather-lightning" }, { mood: 4, weather: "weather-cloudy" }, { mood: 5, weather: "weather-sunny" }, { mood: 1, weather: "weather-windy" }, { mood: 6, weather: "weather-lightning-rainy" }, { mood: 3, weather: "weather-partlycloudy" }, { mood: 8, weather: "weather-lightning-rainy" }, { mood: 9, weather: "weather-windy-variant" }, { mood: 10, weather: "weather-rainy" }, { mood: 9, weather: "weather-sunny" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 10, weather: "weather-rainy" }, { mood: 7, weather: "weather-snowy" }, { mood: 3, weather: "weather-lightning-rainy" }, { mood: 2, weather: "weather-snowy" }, { mood: 6, weather: "weather-sunny" }, { mood: 3, weather: "weather-pouring" }, { mood: 5, weather: "weather-windy-variant" }, { mood: 6, weather: "weather-snowy" }, { mood: 6, weather: "weather-pouring" }, { mood: 7, weather: "weather-cloudy" }, { mood: 4, weather: "weather-windy-variant" }, { mood: 5, weather: "weather-partlycloudy" }, { mood: 4, weather: "weather-snowy-rainy" }, { mood: 10, weather: "weather-windy-variant" }, { mood: 7, weather: "weather-snowy" }, { mood: 2, weather: "weather-snowy" }, { mood: 7, weather: "weather-partlycloudy" }, { mood: 3, weather: "weather-pouring" }, { mood: 8, weather: "weather-sunny" }, { mood: 5, weather: "weather-fog" }, { mood: 10, weather: "weather-snowy" }, { mood: 2, weather: "weather-pouring" }, { mood: 2, weather: "weather-partlycloudy" }, { mood: 10, weather: "weather-fog" }, { mood: 10, weather: "weather-pouring" }, { mood: 8, weather: "weather-snowy" }, { mood: 6, weather: "weather-sunny" }, { mood: 8, weather: "weather-windy-variant" }, { mood: 9, weather: "weather-sunny" }, { mood: 9, weather: "weather-fog" }, { mood: 7, weather: "weather-lightning" }, { mood: 6, weather: "weather-windy-variant" }, { mood: 3, weather: "weather-hail" }, { mood: 7, weather: "weather-lightning-rainy" }, { mood: 6, weather: "weather-sunny" }, { mood: 9, weather: "weather-hail" }, { mood: 5, weather: "weather-sunny" }, { mood: 8, weather: "weather-pouring" }, { mood: 1, weather: "weather-lightning" }, { mood: 7, weather: "weather-partlycloudy" }, { mood: 5, weather: "weather-hail" }, { mood: 2, weather: "weather-snowy" }, { mood: 8, weather: "weather-windy-variant" }, { mood: 2, weather: "weather-snowy-rainy" }, { mood: 7, weather: "weather-cloudy" }, { mood: 5, weather: "weather-fog" }, { mood: 10, weather: "weather-partlycloudy" }, { mood: 3, weather: "weather-fog" }, { mood: 4, weather: "weather-partlycloudy" }, { mood: 7, weather: "weather-sunny" }, { mood: 4, weather: "weather-fog" }, { mood: 7, weather: "weather-lightning" }, { mood: 6, weather: "weather-rainy" }, { mood: 4, weather: "weather-snowy-rainy" }, { mood: 8, weather: "weather-cloudy" }, { mood: 5, weather: "weather-windy-variant" }, { mood: 1, weather: "weather-hail" }, { mood: 7, weather: "weather-windy" }, { mood: 7, weather: "weather-rainy" }, { mood: 3, weather: "weather-rainy" }, { mood: 3, weather: "weather-sunny" }, { mood: 6, weather: "weather-cloudy" }, { mood: 7, weather: "weather-rainy" }, { mood: 7, weather: "weather-lightning" }, { mood: 6, weather: "weather-fog" }, { mood: 4, weather: "weather-snowy" }, { mood: 8, weather: "weather-windy" }, { mood: 4, weather: "weather-sunny" }, { mood: 10, weather: "weather-snowy-rainy" }, { mood: 9, weather: "weather-cloudy" }, { mood: 10, weather: "weather-snowy-rainy" }, { mood: 4, weather: "weather-windy" }, { mood: 5, weather: "weather-windy-variant" }, { mood: 6, weather: "weather-lightning-rainy" }, { mood: 9, weather: "weather-pouring" }, { mood: 9, weather: "weather-windy" }, { mood: 5, weather: "weather-fog" }, { mood: 3, weather: "weather-windy" }, { mood: 4, weather: "weather-rainy" }, { mood: 2, weather: "weather-lightning-rainy" }, { mood: 4, weather: "weather-pouring" }, { mood: 9, weather: "weather-lightning-rainy" }, { mood: 5, weather: "weather-windy-variant" }, { mood: 4, weather: "weather-hail" }, { mood: 10, weather: "weather-lightning-rainy" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 7, weather: "weather-snowy" }, { mood: 4, weather: "weather-sunny" }, { mood: 1, weather: "weather-rainy" }, { mood: 10, weather: "weather-windy" }, { mood: 2, weather: "weather-lightning-rainy" }, { mood: 5, weather: "weather-sunny" }, { mood: 5, weather: "weather-fog" }, { mood: 9, weather: "weather-lightning" }, { mood: 3, weather: "weather-windy" }, { mood: 9, weather: "weather-lightning-rainy" }, { mood: 9, weather: "weather-rainy" }, { mood: 7, weather: "weather-pouring" }, { mood: 9, weather: "weather-hail" }, { mood: 4, weather: "weather-pouring" }, { mood: 4, weather: "weather-fog" }, { mood: 10, weather: "weather-lightning-rainy" }, { mood: 3, weather: "weather-lightning" }, { mood: 3, weather: "weather-snowy" }, { mood: 6, weather: "weather-hail" }, { mood: 8, weather: "weather-partlycloudy" }, { mood: 7, weather: "weather-sunny" }, { mood: 7, weather: "weather-windy" }, { mood: 9, weather: "weather-snowy-rainy" }, { mood: 7, weather: "weather-pouring" }, { mood: 9, weather: "weather-windy" }, { mood: 7, weather: "weather-snowy" }, { mood: 9, weather: "weather-rainy" }, { mood: 5, weather: "weather-rainy" }, { mood: 6, weather: "weather-sunny" }, { mood: 8, weather: "weather-sunny" }, { mood: 4, weather: "weather-lightning" }, { mood: 10, weather: "weather-rainy" }, { mood: 9, weather: "weather-sunny" }, { mood: 8, weather: "weather-lightning-rainy" }, { mood: 3, weather: "weather-sunny" }, { mood: 8, weather: "weather-windy" }, { mood: 10, weather: "weather-lightning-rainy" }, { mood: 9, weather: "weather-hail" }, { mood: 10, weather: "weather-sunny" }, { mood: 1, weather: "weather-snowy-rainy" }, { mood: 3, weather: "weather-fog" }, { mood: 10, weather: "weather-pouring" }, { mood: 6, weather: "weather-windy-variant" }, { mood: 3, weather: "weather-hail" }, { mood: 4, weather: "weather-sunny" }, { mood: 2, weather: "weather-lightning-rainy" }, { mood: 5, weather: "weather-windy" }, { mood: 5, weather: "weather-partlycloudy" }, { mood: 7, weather: "weather-snowy-rainy" }, { mood: 1, weather: "weather-pouring" }, { mood: 4, weather: "weather-fog" }, { mood: 6, weather: "weather-lightning-rainy" }, { mood: 4, weather: "weather-fog" }, { mood: 9, weather: "weather-rainy" }, { mood: 3, weather: "weather-rainy" }, { mood: 8, weather: "weather-rainy" }, { mood: 4, weather: "weather-pouring" }, { mood: 1, weather: "weather-snowy" }, { mood: 9, weather: "weather-pouring" }, { mood: 3, weather: "weather-sunny" }, { mood: 6, weather: "weather-windy" }, { mood: 7, weather: "weather-partlycloudy" }, { mood: 7, weather: "weather-hail" }, { mood: 5, weather: "weather-lightning-rainy" }, { mood: 2, weather: "weather-partlycloudy" }, { mood: 1, weather: "weather-snowy-rainy" }, { mood: 5, weather: "weather-snowy-rainy" }, { mood: 6, weather: "weather-partlycloudy" }, { mood: 1, weather: "weather-windy" }, { mood: 6, weather: "weather-pouring" }, { mood: 9, weather: "weather-windy" }, { mood: 5, weather: "weather-windy" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 3, weather: "weather-windy" }, { mood: 2, weather: "weather-cloudy" }, { mood: 8, weather: "weather-sunny" }, { mood: 7, weather: "weather-windy" }, { mood: 6, weather: "weather-lightning" }, { mood: 7, weather: "weather-lightning" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 6, weather: "weather-cloudy" }, { mood: 7, weather: "weather-windy" }, { mood: 10, weather: "weather-pouring" }, { mood: 7, weather: "weather-lightning-rainy" }, { mood: 7, weather: "weather-windy-variant" }, { mood: 1, weather: "weather-sunny" }, { mood: 10, weather: "weather-windy-variant" }, { mood: 9, weather: "weather-windy-variant" }, { mood: 8, weather: "weather-partlycloudy" }, { mood: 9, weather: "weather-snowy" }, { mood: 1, weather: "weather-windy" }, { mood: 2, weather: "weather-snowy" }, { mood: 10, weather: "weather-partlycloudy" }, { mood: 6, weather: "weather-fog" }, { mood: 5, weather: "weather-snowy-rainy" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 6, weather: "weather-windy-variant" }, { mood: 10, weather: "weather-hail" }, { mood: 7, weather: "weather-snowy-rainy" }, { mood: 3, weather: "weather-cloudy" }, { mood: 4, weather: "weather-hail" }, { mood: 7, weather: "weather-partlycloudy" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 7, weather: "weather-sunny" }, { mood: 7, weather: "weather-rainy" }, { mood: 4, weather: "weather-partlycloudy" }, { mood: 6, weather: "weather-snowy-rainy" }, { mood: 6, weather: "weather-cloudy" }, { mood: 5, weather: "weather-lightning-rainy" }, { mood: 8, weather: "weather-fog" }, { mood: 3, weather: "weather-cloudy" }, { mood: 2, weather: "weather-hail" }, { mood: 5, weather: "weather-fog" }, { mood: 9, weather: "weather-rainy" }, { mood: 4, weather: "weather-windy" }, { mood: 9, weather: "weather-sunny" }, { mood: 8, weather: "weather-cloudy" }, { mood: 10, weather: "weather-windy" }, { mood: 4, weather: "weather-hail" }, { mood: 2, weather: "weather-hail" }, { mood: 4, weather: "weather-snowy" }, { mood: 5, weather: "weather-windy-variant" }, { mood: 8, weather: "weather-lightning-rainy" }, { mood: 5, weather: "weather-fog" }, { mood: 9, weather: "weather-sunny" }, { mood: 1, weather: "weather-hail" }, { mood: 3, weather: "weather-windy-variant" }, { mood: 10, weather: "weather-lightning-rainy" }, { mood: 8, weather: "weather-pouring" }, { mood: 10, weather: "weather-snowy" }, { mood: 6, weather: "weather-cloudy" }, { mood: 5, weather: "weather-windy" }, { mood: 8, weather: "weather-pouring" }, { mood: 4, weather: "weather-windy-variant" }, { mood: 7, weather: "weather-fog" }, { mood: 2, weather: "weather-hail" }, { mood: 6, weather: "weather-partlycloudy" }, { mood: 5, weather: "weather-snowy" }, { mood: 3, weather: "weather-pouring" }, { mood: 9, weather: "weather-cloudy" }, { mood: 6, weather: "weather-windy" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 2, weather: "weather-cloudy" }, { mood: 10, weather: "weather-pouring" }, { mood: 8, weather: "weather-partlycloudy" }, { mood: 2, weather: "weather-fog" }, { mood: 8, weather: "weather-sunny" }, { mood: 4, weather: "weather-partlycloudy" }, { mood: 8, weather: "weather-windy" }, { mood: 5, weather: "weather-partlycloudy" }, { mood: 1, weather: "weather-fog" }, { mood: 1, weather: "weather-lightning" }, { mood: 2, weather: "weather-windy-variant" }, { mood: 4, weather: "weather-sunny" }, { mood: 4, weather: "weather-lightning" }, { mood: 8, weather: "weather-snowy" }, { mood: 10, weather: "weather-snowy" }, { mood: 4, weather: "weather-lightning-rainy" }, { mood: 1, weather: "weather-fog" }, { mood: 1, weather: "weather-snowy" }, { mood: 4, weather: "weather-fog" }, { mood: 1, weather: "weather-lightning" }, { mood: 1, weather: "weather-windy" }, { mood: 1, weather: "weather-pouring" }, { mood: 9, weather: "weather-windy" }, { mood: 5, weather: "weather-lightning-rainy" }, { mood: 6, weather: "weather-pouring" }, { mood: 10, weather: "weather-partlycloudy" }, { mood: 9, weather: "weather-fog" }, { mood: 1, weather: "weather-sunny" }, { mood: 3, weather: "weather-windy" }, { mood: 5, weather: "weather-windy" }, { mood: 7, weather: "weather-hail" }, { mood: 9, weather: "weather-sunny" }, { mood: 1, weather: "weather-windy" }, { mood: 7, weather: "weather-sunny" }, { mood: 6, weather: "weather-sunny" }, { mood: 3, weather: "weather-sunny" }, { mood: 2, weather: "weather-rainy" }, { mood: 8, weather: "weather-cloudy" }, { mood: 6, weather: "weather-windy" }, { mood: 9, weather: "weather-snowy" }, { mood: 8, weather: "weather-lightning-rainy" }, { mood: 5, weather: "weather-pouring" }, { mood: 5, weather: "weather-lightning-rainy" }, { mood: 1, weather: "weather-cloudy" }, { mood: 5, weather: "weather-pouring" }, { mood: 4, weather: "weather-hail" }, { mood: 2, weather: "weather-sunny" }, { mood: 1, weather: "weather-windy-variant" }, { mood: 5, weather: "weather-windy" }, { mood: 9, weather: "weather-sunny" }, { mood: 8, weather: "weather-snowy-rainy" }, { mood: 9, weather: "weather-snowy" }, { mood: 6, weather: "weather-lightning-rainy" }, { mood: 4, weather: "weather-rainy" }, { mood: 4, weather: "weather-snowy-rainy" }, { mood: 4, weather: "weather-lightning" }, { mood: 1, weather: "weather-sunny" }, { mood: 3, weather: "weather-fog" }, { mood: 5, weather: "weather-hail" }, { mood: 10, weather: "weather-partlycloudy" }, { mood: 8, weather: "weather-snowy-rainy" }, { mood: 7, weather: "weather-windy-variant" }, { mood: 7, weather: "weather-snowy-rainy" }, { mood: 8, weather: "weather-cloudy" }, { mood: 10, weather: "weather-hail" }, { mood: 1, weather: "weather-hail" }, { mood: 3, weather: "weather-windy-variant" }, { mood: 9, weather: "weather-partlycloudy" }, { mood: 4, weather: "weather-cloudy" }, { mood: 10, weather: "weather-sunny" }, { mood: 9, weather: "weather-windy-variant" }, { mood: 1, weather: "weather-cloudy" }, { mood: 4, weather: "weather-lightning" }, { mood: 10, weather: "weather-partlycloudy" }, { mood: 1, weather: "weather-lightning-rainy" }, { mood: 8, weather: "weather-snowy-rainy" }, { mood: 6, weather: "weather-hail" }, { mood: 8, weather: "weather-sunny" }, { mood: 4, weather: "weather-windy-variant" }, { mood: 1, weather: "weather-windy" }, { mood: 5, weather: "weather-windy" }, { mood: 7, weather: "weather-partlycloudy" }, { mood: 7, weather: "weather-fog" }, { mood: 8, weather: "weather-cloudy" }, { mood: 1, weather: "weather-pouring" }, { mood: 6, weather: "weather-pouring" }, { mood: 1, weather: "weather-sunny" }, { mood: 7, weather: "weather-windy" }, { mood: 4, weather: "weather-windy-variant" }, { mood: 3, weather: "weather-fog" }, { mood: 7, weather: "weather-partlycloudy" }, { mood: 6, weather: "weather-snowy-rainy" }, { mood: 9, weather: "weather-lightning" }, { mood: 1, weather: "weather-partlycloudy" }, { mood: 3, weather: "weather-sunny" }, { mood: 5, weather: "weather-partlycloudy" }, { mood: 1, weather: "weather-cloudy" }, { mood: 8, weather: "weather-windy-variant" }, { mood: 3, weather: "weather-sunny" }, { mood: 8, weather: "weather-lightning-rainy" }, { mood: 8, weather: "weather-windy" }, { mood: 5, weather: "weather-snowy" }, { mood: 5, weather: "weather-snowy" }, { mood: 7, weather: "weather-hail" }, { mood: 9, weather: "weather-snowy-rainy" }, { mood: 9, weather: "weather-hail" }, { mood: 4, weather: "weather-rainy" }, { mood: 5, weather: "weather-lightning" }, { mood: 4, weather: "weather-windy" }, { mood: 10, weather: "weather-windy-variant" }, { mood: 7, weather: "weather-rainy" }, { mood: 3, weather: "weather-partlycloudy" }, { mood: 9, weather: "weather-snowy" }, { mood: 4, weather: "weather-pouring" }, { mood: 3, weather: "weather-snowy" } ];
  const url = 'https://kleiomainplayer.s3.us-west-1.amazonaws.com/songs/35.mp3'

  const handleCurrentMood = (mood) => {
    changeMoodVisible(false);
    changeMainVisible(true);
    setYear((year) => { return yearMoods });
    setMood(mood);
    setSong(url);
    setWeek((week) => { return currentWeek });
    handleProgression(duration);
  }

  const handleProgression = (duration) => {
    const maxCount = Math.floor(duration * 1000 / 5000);
    var count = 0;
    var start = setInterval(() => {
      count++;
      if (count % 2 === 0) {
        setFill('#adb7168f');
      } else {
        setFill('#fff');
      }
      if (count > maxCount) {
        console.log('Music stopped')
        setFill('#fff')
        clearInterval(start)
      }
    }, 400)
  }

  const handleHome = () => {
    setFill('#fff')
    changeMoodVisible(true);
    changeMainVisible(false);
  }

  const handleMain = () => {
    changeMainVisible(true);
    handleProgression(duration);
    changeWeekVisible(false);
    changeMonthVisible(false);
  }

  const handleWeek = () => {
    changeWeekVisible(true);
    changeMainVisible(false);
    changeMonthVisible(false);
  }

  const handleMonth = () => {
    changeMonthVisible(true);
    changeMainVisible(false);
    changeWeekVisible(false);
  }

  const handleYear = (icon) => {
    setWeatherIcon(icon);
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={moodVisible}
      >
        <View style={styles.containerHome}>
          <Text style={styles.title}>Mostly Moody</Text>
          <Text style={{ paddingTop: 50, paddingBottom: 30 }}>Today I feel ...</Text>
          <Mood handleCurrentMood={handleCurrentMood} />
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={false}
        visible={mainVisible}
      >
        <Header containerStyle={{ backgroundColor: "#adb716" }}
          leftComponent={{ icon: 'barschart', type: 'antdesign', color: '#fff', onPress: handleWeek }}
          centerComponent={{ icon: 'home', onPress: handleMain }}
          rightComponent={{ icon: 'calendar', type: 'antdesign', color: '#fff', onPress: handleMonth }}
        />
        <View style={styles.containerWeather}>
          <Icon name='edit' type='antdesign' color='#60ecb2' onPress={handleHome} />
          <Text style={{ paddingTop: 20, paddingBottom: 60 }}>{`Mood Level ${mood}`}</Text>
          <Text style={{ fontSize: 15, letterSpacing: 5, paddingBottom: 20 }}>Partly Cloudy</Text>
          {/* <Icon color="#adb716" name='weather-cloudy' type='material-community' size={70} /> */}
          <Text style={{fontSize: 60, color: "#adb716", paddingTop: 5 }}>{weather}</Text>
        </View>
        <Waveform year={year} fill={fill} handleYear={handleYear} />
        <Music song={song} />
        <View style={styles.bottomTab}>
        <Icon color="#fff" name={weatherIcon} type='material-community' size={60} />
          </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={false}
        visible={weekVisible}
      >
        <Header containerStyle={{ backgroundColor: "#fff" }}
          leftComponent={{ icon: 'barschart', type: 'antdesign', onPress: handleWeek }}
          centerComponent={{ icon: 'home', color: '#60ecb2', onPress: handleMain }}
          rightComponent={{ icon: 'calendar', type: 'antdesign', color: '#60ecb2', onPress: handleMonth }}
        />
        <Text style={styles.weekly}>Weekly View</Text>
        <Week week={week} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={false}
        visible={monthVisible}
      >
        <Header containerStyle={{ backgroundColor: "#fff" }}
          leftComponent={{ icon: 'barschart', type: 'antdesign', color: '#60ecb2', onPress: handleWeek }}
          centerComponent={{ icon: 'home', color: '#60ecb2', onPress: handleMain }}
          rightComponent={{ icon: 'calendar', type: 'antdesign', onPress: handleMonth }}
        />
        <Month />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#adb716',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWeather: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTab: {
    flex: 0.15,
    backgroundColor: '#adb716',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    letterSpacing: 5,
  },
  weekly: {
    fontSize: 20,
    color: '#fff',
    letterSpacing: 5,
    backgroundColor: "#adb716",
    textAlign: 'center',
    paddingTop: 100,
    paddingBottom: 100
  }
})