import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import ProfilePicture from '../../components/ProfilePicture'
import { images, icons } from '../../constants'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const ProfileRow = ({icon, label, onPress}) => (
  <TouchableOpacity 
    className="flex-row p-3 mb-3 items-center"
    onPress={onPress}
  >
    <View className=" w-1/5">
      <View className="w-[50] h-[50] bg-gray-100 rounded-xl flex items-center justify-center">
        <Image
          source={icon}
          resizeMode="contain"
          
        />
      </View>
    </View>
    <Text className="w-4/5 text-2xl font-semibold">{label}</Text>
  </TouchableOpacity>
)

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary-100 h-full items-center justify-center gap-10 p-2  ">
      <View className="flex-row items-center justify-center gap-4 ">
        <View className="w-[120] h-[120]">
          <ProfilePicture
            picture={images.picture}            
          />
        </View>
        <View className="">
          <Text className="font-bold text-center text-gray-500 text-xl">Username</Text>
          <Text className="font-bold text-center text-xl">VISHNU P V</Text>
        </View> 
        <TouchableOpacity>
          <Image
            source={icons.edit}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      
      <View className="bg-white w-4/5 rounded-3xl ">
        <ProfileRow icon={icons.wallet} label="Account" /><View className="border-b-2 border-gray-100"/>
        <ProfileRow icon={icons.settings} label="Settings" /><View className="border-b-2 border-gray-100"/>
        <ProfileRow icon={icons.upload} label="Export data" />
        <ProfileRow icon={icons.logout} label="Logout" />
      </View>


      <StatusBar backgroundColor="#FFF6E5"  />  
    </SafeAreaView>
  )
}

export default Profile