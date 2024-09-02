import React from 'react'
import { Text } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUp = () => {
  return (
    <SafeAreaView>
      <Text className="text-3xl" >SignUp</Text>
      <Link href="/sign-in" >Sign In</Link>
    </SafeAreaView>
  )
}

export default SignUp