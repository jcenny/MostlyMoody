import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { Header, Icon } from 'react-native-elements'
import Mood from './components/Mood.js';
import Waveform from './components/Waveform.js';
import Month from './components/Month.js';
import Week from './components/Week.js';
import yearMoods from './components/sampleData.js';

export default function App() {
  const [weather, setWeather] = useState('55°F');
  const [moodVisible, changeMoodVisible] = useState(true);
  const [mainVisible, changeMainVisible] = useState(false);
  const [weekVisible, changeWeekVisible] = useState(false);
  const [monthVisible, changeMonthVisible] = useState(false);
  const [mood, setMood] = useState(0);
  const [year, setYear] = useState([]);
  const [fill, setFill] = useState('#fff');
  const [week, setWeek] = useState([]);
  const [weatherIcon, setWeatherIcon] = useState('weather-cloudy')
  const currentWeek = [
    { day: 'mon', mood: 6, degree: '55', weather: 'weather-cloudy' },
    { day: 'tue', mood: 7, degree: '59', weather: 'weather-fog' },
    { day: 'wed', mood: 9, degree: '57', weather: 'weather-sunny' },
    { day: 'thu', mood: 5, degree: '53', weather: 'weather-rainy' },
    { day: 'fri', mood: 6, degree: '52', weather: 'weather-windy' },
    { day: 'sat', mood: 7, degree: '61', weather: 'weather-sunny' }, 
    { day: 'sun', mood: 8, degree: '60', weather: 'weather-partlycloudy' }];

  const handleCurrentMood = (mood) => {
    changeMoodVisible(false);
    changeMainVisible(true);
    setYear((year) => { return yearMoods });
    setMood(mood);
    setWeek((week) => { return currentWeek });
  }

  const handleHome = () => {
    setFill('#fff')
    changeMoodVisible(true);
    changeMainVisible(false);
  }

  const handleMain = () => {
    changeMainVisible(true);
    setWeatherIcon('weather-cloudy');
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