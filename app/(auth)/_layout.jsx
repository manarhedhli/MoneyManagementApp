import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const AuthLayout = () => {
  return (
    <>
        <Stack>
            <Stack.Screen
                name="sign-in"
            />
            <Stack.Screen
                name="sign-up"
            />
        </Stack>
        <StatusBar backgroundColor="#161622" style="light" />
    </>
  )
}

export default AuthLayout