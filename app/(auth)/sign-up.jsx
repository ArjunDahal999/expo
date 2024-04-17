import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormFeild from '../../components/ui/form-field'
import Button from '../../components/ui/Button'
import { Link } from 'expo-router'
const SignUp = () =>
{
    const [form, setForm] = useState(
        {
            username: "",
            email: "",
            password: ""
        }
    )

    const [isSumbitting, setIsSubmitting] = useState()
    return (
        <SafeAreaView className=" bg-primary h-full">
            <ScrollView>
                <View className=' w-full min-h-[100vh]   px-4  justify-start  '>
                    <Image source={images.logo} className=" w-36 h-36" resizeMode='contain' />
                    <Text className=" text-white font-bold text-xl pb-5">SignUp to Aora</Text>
                    <FormFeild
                        title="Username"
                        value={form.username}
                        handelChangeText={(e) => { setForm({ ...form, username: e }) }}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormFeild
                        title="Email"
                        value={form.email}
                        handelChangeText={(e) => { setForm({ ...form, email: e }) }}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormFeild
                        title="Password"
                        value={form.password}
                        handelChangeText={(e) => { setForm({ ...form, password: e }) }}
                        otherStyles="mt-7"
                    />

                    <Button
                        title={"SignUp"}
                        handlePress={() => console.log(form)}
                        containerStyles="  mt-7 "
                        isLoading={isSumbitting}
                    />

                    <View className="flex pt-10 flex-row justify-center gap-x-2 items-center">
                        <Text className=" text-lg text-center text-gray-100 font-pregular">
                            Already Have an account ?
                        </Text>
                        <Link href={'/sign-in'} className=' text-secondary  -translate-y-1 text-lg'>Sign In</Link>
                    </View>


                </View>

            </ScrollView>
        </SafeAreaView>

    )
}

export default SignUp