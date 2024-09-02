import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from "../constants"



export default function App(){
    return (
        <SafeAreaView> 
            <View className="justify-between h-full pb-8 ">                
                <Image 
                    source={images.logo}                        
                    className=" w-full min-h-[55vh]"
                />
                
                <View className="items-center space-y-10" >
                    <Text className="text-5xl font-bold" >Simple solution for your budget.</Text>
                    <Text className="text-4xl" >Counter and distribute the income correctly...</Text>
                    <TouchableOpacity
                        className="w-[230] h-[50] bg-black items-center justify-center rounded-lg "
                        
                    >
                        <Text className="color-white text-2xl "> Continue </Text>
                    </TouchableOpacity>
                
                </View> 
            </View>                                           
            <StatusBar />
        </SafeAreaView>
    )
}