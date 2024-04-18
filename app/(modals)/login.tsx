import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '../hooks/usewarmupbrowser'

const login = () => {
  useWarmUpBrowser
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email"  autoCapitalize='none'/>   
      <TextInput placeholder="Password" secureTextEntry={true} autoCapitalize='none'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
      padding:26
    }
})
export default login