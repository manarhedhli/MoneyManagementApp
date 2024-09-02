import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FilterButton = ({ label, isSelected, onPress }) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        className={` w-1/4 h-[35] items-center justify-center rounded-xl ${isSelected ? 'bg-black' : 'bg-primary-100'}`}
    >
        <Text className= {`${isSelected ? 'text-white' : 'text-gray'}  text-xl `}>
            {label}
        </Text>
    </TouchableOpacity>
  )
}

export default FilterButton