import { Text, TextInput, View, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Picker } from '@react-native-picker/picker'
import { RadioGroup } from 'react-native-radio-buttons-group'


const Add = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [description, setDescription] = useState("")
  const [selectedOption, setSelectedOption] = useState('Income');
  const handlePress = (value) => {
    setSelectedOption(value);
  };

  const categories = [
    { label: 'Shopping', value: 'Shopping' },
    { label: 'Food', value: 'Food' },
    { label: 'Fuel', value: 'Fuel' },
    { label: 'Salary', value: 'Salary' },
  ];

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue);
    setCustomCategory(''); 
  };
  return (
    <SafeAreaView className="bg-primary-100 h-full p-2 justify-around">
      <View >
        <Text className="font-bold text-lg color-gray mb-3">How much?</Text>
        <TextInput
          className="font-bold text-4xl mb-3"
          placeholder='$ 55689'
        />
      
        <View className="bg-white rounded-3xl py-6">
          <Text className="font-bold text-base color-gray px-4 " >Category</Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
            className="h-[50] border-gray mx-2 rounded-3xl p-3 mb-2 " // !!!!!!!!!!!!!!!!!!!!!!!!!
          >
            {categories.map((category, index) => (
              <Picker.Item key={index} label={category.label} value={category.value}  />
            ))}
            <Picker.Item label="Other" value="Other" />
          </Picker>
          {selectedValue === 'Other' && (
            <TextInput 
              className="border-2 border-gray mx-2 rounded-xl p-3 text-lg mb-2 "           
              placeholder="Enter custom category"
              value={customCategory}
              onChangeText={setCustomCategory}
            />
          )}
          <TextInput          
            multiline={true}
            numberOfLines={4}
            placeholder="Type your description here..."
            className="border-2 border-gray mx-2 rounded-xl p-3 text-lg mb-2"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
          <View>
          
          </View>
          <View className="flex-row justify-center items-center mb-2">        
            <TouchableOpacity 
              onPress={() => setSelectedOption("Income")}
              className={`w-[80] h-[40] rounded-2xl items-center justify-center mx-1 ${selectedOption === "Income" ? 'bg-green border-2 border-black' : 'bg-green'}`}
            >
              <Text className="color-white font-bold text-lg">Icome</Text>
            </TouchableOpacity>
            <TouchableOpacity             
              className={`w-[80] h-[40] rounded-2xl items-center justify-center mx-1 ${selectedOption === "Expense" ? 'bg-primary border-2 border-black' : 'bg-primary'}`}
              onPress={() => setSelectedOption("Expense")}
            >
              <Text className="color-white font-bold text-lg">Expense</Text>
            </TouchableOpacity>
          </View>
          {/* ----------------Neeed correction Date Picker */}
          <TextInput 
              className="border-2 border-gray mx-2 rounded-xl p-3 text-lg mb-2 "           
              placeholder="Pick your date"
              value={customCategory}
              onChangeText={setCustomCategory}
          />
        </View>
      </View>  
      
      <View className="items-center ">
        <TouchableOpacity 
          className="w-[350] h-[50] bg-black rounded-lg items-center justify-center " 
          // onPress={}
        >            
          <Text className="font-bold color-white text-2xl "> Continue </Text>        
        </TouchableOpacity>
      </View>


      <StatusBar backgroundColor="#FFF6E5"  />  
    </SafeAreaView>
  )
}

export default Add