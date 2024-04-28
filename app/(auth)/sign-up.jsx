import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormFeild from '../../components/ui/form-field'
import Button from '../../components/ui/Button'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'
const SignUp = () =>
{
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        username: "Arjun",
        email: "dahalarjun404@gmail.com",
        password: "11111111",
    });

    const handelSubmit = async () =>
    {
        if (form.username === "" || form.email === "" || form.password === "")
        {
            Alert.alert("Error", "Please fill in all fields");
        }
        setSubmitting(true);
        try
        {
            const result = await createUser(form.email, form.password, form.username);
            setUser(result);
            setIsLogged(true);

            router.replace("/home");
        } catch (error)
        {
            Alert.alert("Error", error.message);
        } finally
        {
            setSubmitting(false);
        }
    };
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
                        handlePress={handelSubmit}
                        containerStyles="  mt-7 "
                        isLoading={isSubmitting}
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