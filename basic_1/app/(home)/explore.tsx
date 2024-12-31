import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>explore</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
})