import React from 'react'
import { Text } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView>
      <Text className="text-3xl" >SignIn</Text>
      <Link href="/sign-up" >Sign Up</Link>
    </SafeAreaView>
  )
}

export default SignIn