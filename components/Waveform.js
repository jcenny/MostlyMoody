import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, PanResponder } from 'react-native';

export default function Waveform(props) {
  const [ waveformFill, setWaveformFill] = useState('#fff');
  const { year, fill, handleYear } = props;
  const _panResponder = (weather) => PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      handleYear(weather);
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {

    },
    onPanResponderTerminate: (evt, gestureState) => {

    },
  });
  return (
    <View>
      <ScrollView contentContainerStyle={styles().container} horizontal={true}>{year.map((day, index) => {
        return (
          <View style={styles(day.mood, index, waveformFill).bars} key={index} {..._panResponder(day.weather).panHandlers}></View>
        )
      })}
      </ScrollView>
    </View>
  )
}

const styles = (day, index, fill) => StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  bars: {
    width: 5,
    height: day * 12,
    borderStyle: 'solid',
    borderColor: '#adb716',
    borderWidth: 0.5,
    backgroundColor: fill
  }
})