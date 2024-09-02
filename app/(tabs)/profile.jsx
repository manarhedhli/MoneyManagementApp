import {  Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary-100 h-full">
      <Text>Profile</Text>
      <StatusBar backgroundColor="#FFF6E5"  />  
    </SafeAreaView>
  )
}

export default Profile