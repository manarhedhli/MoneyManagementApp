import React from 'react'
import { Tabs } from 'expo-router'
import {icons} from '../../constants'
import { Image, Text, View } from 'react-native'


const TabIcon= ({icon, color, name, focused})=>{
    return(
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text  style={{color: color}}>  
                {name}
            </Text>
        </View>
    )
}

const TabAddIcon= ({icon, color})=>{
    return(                  
        <View 
            className="mb-10 w-[55px] h-[60px] rounded-full p-3 items-center justify-center border-gray-500 border-4 "
            style={{backgroundColor: color}}
        >
            <Image
                source={icon}
                resizeMode='contain'
                tintColor="white"
                className='w-8 h-8'
            />
            
        </View>        
    )
}

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#7F3DFF',
            tabBarInactiveTintColor: '#C6C6C6',
            tabBarStyle: {
                backgroundColor: '#fff',
                borderTopWidth:1,

                height: 60,

            }
        }}
    
    >
        <Tabs.Screen
            name='home'
            options={{
                title:'Home',
                headerShown: false,
                tabBarIcon: ({color, focused})=>(
                    <TabIcon
                        icon={icons.home}
                        color={color}
                        name='Home'
                        focused={focused}
                    />
                )
            }}
        />
        <Tabs.Screen
            name='transactions'
            options={{     
                title: "Transactions",
                headerTitleAlign: 'center',
                headerStyle: { 
                    backgroundColor: '#FFF6E5' ,
                    fontWeight: 'bold'
                },        
                tabBarIcon: ({color, focused})=>(
                    <TabIcon
                        icon={icons.transaction}
                        color={color}
                        name='Transactions'
                        focused={focused}
                    />
                )
            }}
        />
        <Tabs.Screen
            name='add'
            options={{                
                headerShown: false,
                tabBarIcon: ({color, focused})=>(
                    <TabAddIcon
                        icon={icons.add} 
                        color={color}                       
                    />
                )
            }}
        />
        <Tabs.Screen
            name='statistics'
            options={{                
                headerShown: false,
                tabBarIcon: ({color, focused})=>(
                    <TabIcon
                        icon={icons.chart}
                        color={color}
                        name='Budget'
                        focused={focused}
                    />
                )
            }}
        />
        <Tabs.Screen
            name='profile'
            options={{
                
                headerShown: false,
                tabBarIcon: ({color, focused})=>(
                    <TabIcon
                        icon={icons.user}
                        color={color}
                        name='Profile'
                        focused={focused}
                    />
                )
            }}
        />

    </Tabs>
  )
}

export default TabsLayout

