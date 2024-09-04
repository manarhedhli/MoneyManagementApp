import { View, Text, Image } from 'react-native'
import React from 'react'
import {icons} from '../constants'


const AmountCard = ({type, amount}) => {
    const bgColor = type === "Expenses" ? "bg-primary" : "bg-green";
    const iconSource = type === "Expenses" ? icons.expense : icons.income;
    return (
        <View className="w-1/2  h-[100] ">
            <View className={`flex-row items-center ${bgColor} h-full rounded-3xl m-2 p-2 `} >
                <Image
                    source={iconSource}
                    resizeMode="contain"
                    className="w-1/3 " 
                />
                <View className="justify-center p-2">
                    <Text
                        className="color-white font-bold"
                    >{type}</Text>
                    <Text
                    className="text-3xl color-white font-bold "
                    >{amount}</Text>
                </View>
            </View>
        </View>
  )
}

export default AmountCard