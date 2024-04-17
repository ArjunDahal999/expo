import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { router, Redirect } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import { StatusBar } from 'expo-status-bar'
import Button from '../components/ui/Button'

const Index = () =>
{
    return (
        <SafeAreaView className=" bg-primary  h-full " >
            <StatusBar
                style='light'
                backgroundColor='#161622' />
            <ScrollView
                contentContainerStyle={{ height: "100%" }}>
                <View className=" w-full  items-center min-h-[85vh] justify-center  px-4 ">
                    <Image
                        source={images.logo}
                        className=" w-36 h-36"
                        resizeMode='contain'
                    />
                    <Image
                        source={images.cards}
                        className=" w-64 h-64"
                        resizeMode='contain'
                    />
                    <View className='relative mt-5 '>
                        <Text className=" text-white font-bold text-3xl"> Discover Endless Possibilities With
                            <Text className=" text-secondary-200"> Aora</Text>
                        </Text>
                        <Image
                            source={images.path}
                            className=" w-44 h-5 absolute -right-8 -bottom-4"
                            resizeMode='contain'
                        />
                    </View>
                    <Button
                        title=" Continue"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles=" w-[90%] mt-10 "
                        textStyles=""
                        isLoading={false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Index
