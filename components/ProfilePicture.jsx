import { Image, View } from 'react-native'
import React from 'react'

const ProfilePicture = ({picture }) => {
    return (
        <View className="w-full h-full bg-red rounded-full border-2 border-violet overflow-hidden">
            <Image
                source={picture}
                resizeMode="cover"
                className="w-full h-full" 
            />
        </View>
            
    )
}

export default ProfilePicture