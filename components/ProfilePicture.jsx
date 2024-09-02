import { Image, Text, View } from 'react-native'
import React from 'react'

const ProfilePicture = ({picture, name }) => {
    return (
        <View className="flex-row items-center" >
            <Image
                source={picture}
                resizeMode="contain"
                className="mx-2" 

            />
            <Text className="font-bold text-base">{name}</Text>
        </View>
    )
}

export default ProfilePicture