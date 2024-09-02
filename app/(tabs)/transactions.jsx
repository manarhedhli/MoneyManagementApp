import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Transactions = () => {
  return (
    <SafeAreaView className="bg-primary-100 h-full">
      <Text>Transactions</Text>
      <StatusBar backgroundColor="#FFF6E5"  />  
    </SafeAreaView>
  )
}

export default Transactions