import React from 'react'
import { View, Text } from 'react-native'


const TransactionCard = ({type, amount, category, description, time}) => {    
    const color = type === "Expense" ? "color-primary" : "color-green";
    const sign = type === "Expense" ? "-" : "+";
    return (
        <View className="bg-white mb-8 h-[80] justify-center rounded-3xl p-5">
            <View className="flex-row items-center justify-between w-full mb-2">
                <Text className="font-bold text-xl">{category}</Text>
                <Text className={`${color} font-bold text-xl` }>
                    {sign}{amount}
                </Text>
            </View>

            <View className="flex-row items-center justify-between w-full">
                <Text className="text-gray font-bold text-base" >{description}</Text>
                <Text className="text-gray font-bold text-base" >{time}</Text>

            </View>
        </View>
    )
}

export default TransactionCard;