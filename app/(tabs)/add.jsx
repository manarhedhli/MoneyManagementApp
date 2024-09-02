import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Add = () => {
  return (
    <SafeAreaView className="bg-primary-100 h-full">
      <Text>Add</Text>
      <StatusBar backgroundColor="#FFF6E5"  />  
    </SafeAreaView>
  )
}

export default Add