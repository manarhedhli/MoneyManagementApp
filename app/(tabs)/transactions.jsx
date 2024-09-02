import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import TransactionCard from '../../components/TransactionCard'

const Transactions = () => {
  const transactions = [
    {
      id: 1,
      type:"Expense",
      amount:"5120",
      category:"Shopping" ,
      description: "Buy Some grocery",
      time: "10:00 AM"
    },
    {
      id: 2,
      type:"Expense",
      amount:"532",
      category:"Food" ,
      description: "Arabian Hut",
      time: "07:30 PM"
    },
    {
      id:3,
      type:"Income",
      amount:"5000",
      category:"Salary" ,
      description: "Salary for August",
      time: "04:30 PM"
    }
  ];
  return (
    <SafeAreaView className="bg-primary-100 h-full p-2">            
      <FlatList
          data={transactions}
          keyExtractor={(item) => item.$id }
          renderItem={({item}) => (
            <TransactionCard 
              id={item.id}
              type={item.type}
              amount={item.amount}
              category={item.category}
              description={item.description}
              time={item.time}
            />
          )}

        />
        <StatusBar backgroundColor="#FFF6E5"  />         
    </SafeAreaView>
  )
}

export default Transactions