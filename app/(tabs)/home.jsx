import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RecentTransaction from '../../components/RecentTransaction'
import FilterButton from '../../components/FilterButton'
import AmountCard from '../../components/AmountCard'
import ProfilePicture from '../../components/ProfilePicture'
import {images} from '../../constants'
import { StatusBar } from 'expo-status-bar'


const Home = () => {
  const transactions = [
    {
      id:1,
      type:"Income",
      amount:"15000",
      category:"Income" ,
    },
    {
      id:2,
      type:"Expense",
      amount:"6500",
      category:"Food" ,
    },
    {
      id:3,
      type:"Income",
      amount:"2800",
      category:"Icome" ,
    }
  ];
  const [balance, setbalance] = useState("9400.0")
  const filters = ['Today', 'Week', 'Month', 'Year'];
  const [selectedFilter, setSelectedFilter] = useState("Today");
  
  
  
  
  return (
    <SafeAreaView className="bg-gray-100 h-full justify-between">        
      <View className="bg-primary-100 h-1/2 rounded-b-3xl justify-between ">
        <View className="flex-row items-center h-[80] justify-between border-b-2 p-3" >
          <Text className="font-bold text-lg w-1/3" > MONDAY 2 SEPTEMBER </Text>
          <View className="w-[50] h-[50] items-center justify-center">
            <ProfilePicture
              picture={images.picture}              
            />  
          </View>      
        </View>
        <View>
          <Text className="text-gray text-center mb-3" >Account Balance</Text> 
          <Text className="text-4xl font-bold text-center mb-3">{balance}</Text>
        </View>
        <View className="flex-row mb-10">
          <AmountCard
            type="Income"
            amount="25000"
          /> 
          <AmountCard
            type="Expenses"
            amount="11200"
          />
        </View>
      
      </View> 

      <View className="p-4">                   
      
        <View className="flex-row border-2 border-black bg-primary-100 justify-between rounded-xl mb-4 ">
          {filters.map((filter) => (
            <FilterButton 
              key={filter}
              label={filter}
              isSelected={filter === selectedFilter}
              onPress={() => setSelectedFilter(filter)}          
            />
          ))
          }
        </View>
        
              
        <View className="flex-row justify-between items-center w-full my-4 ">
          <Text className="font-bold text-xl" >Recent transactions</Text>
          <TouchableOpacity >
            <Text className="font-bold text-xl">View All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={transactions}
          keyExtractor={(item) => item.$id }
          renderItem={({item}) => (
            <RecentTransaction 
              type={item.type}
              amount={item.amount}
              category={item.category}     
              />
          )}

        />
      </View>  

      <StatusBar backgroundColor="#FFF6E5"  />                         
    </SafeAreaView>
  )
}

export default Home