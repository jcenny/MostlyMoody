import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Month() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly View</Text>
      <Text>coming soon ...</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adb716',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    letterSpacing: 5,
  },
})