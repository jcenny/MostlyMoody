import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Mood(props) {
  const { handleCurrentMood } = props;
  const moodHandler1 = () => {
    handleCurrentMood(1);
  }
  const moodHandler2 = () => {
    handleCurrentMood(2);
  }
  const moodHandler3 = () => {
    handleCurrentMood(3);
  }
  const moodHandler4 = () => {
    handleCurrentMood(4);
  }
  const moodHandler5 = () => {
    handleCurrentMood(5);
  }
  const moodHandler6 = () => {
    handleCurrentMood(6);
  }
  const moodHandler7 = () => {
    handleCurrentMood(7);
  }
  const moodHandler8 = () => {
    handleCurrentMood(8);
  }
  const moodHandler9 = () => {
    handleCurrentMood(9);
  }
  const moodHandler10 = () => {
    handleCurrentMood(10);
  }
  return (
    <View style={{ flexDirection: 'row' }}>
      <Button color="#fff" title="1" onPress={moodHandler1} />
      <Button color="#fff" title="2" onPress={moodHandler2} />
      <Button color="#fff" title="3" onPress={moodHandler3} />
      <Button color="#fff" title="4" onPress={moodHandler4} />
      <Button color="#fff" title="5" onPress={moodHandler5} />
      <Button color="#fff" title="6" onPress={moodHandler6} />
      <Button color="#fff" title="7" onPress={moodHandler7} />
      <Button color="#fff" title="8" onPress={moodHandler8} />
      <Button color="#fff" title="9" onPress={moodHandler9} />
      <Button color="#fff" title="10" onPress={moodHandler10} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20
  }
});
