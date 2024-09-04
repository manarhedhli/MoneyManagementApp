import React from 'react'
import { View, Text, Image } from 'react-native'
import {icons} from '../constants'



const RecentTransaction = ({type, amount, category}) => {
  const bgColor = type === "Expense" ? "bg-primary" : "bg-green";
  const iconSource = type === "Expense" ? icons.down : icons.up;

  return (
    <View className="flex-row items-center justify-between h-[60] p-2 rounded-lg mt-4 px-6 bg-gray-200" >              
        <View className="flex-row items-center">
          <View className={`${bgColor} items-center justify-center w-[40] h-[40] rounded-full `}>
            <Image
              source={iconSource}
              resizeMode="contain"
              className="w-1/2 h-1/2" 
            />
          </View>   
          <Text className="text-xl font-bold  mx-6">$ {amount}</Text>
        </View>
      <Text className="text-xl font-bold color-gray">{category}</Text>
    </View>
  )
}

export default RecentTransaction