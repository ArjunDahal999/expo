import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../../constants'

const FormFeild = (
    {
        title,
        value,
        handelChangeText,
        otherStyles,
        placeholder,
        ...props
    }
) =>
{
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={` space-y-2 ${otherStyles}}`}>
            <Text className=" text-base text-gray-100 font-pmedium">
                {title}
            </Text>
            <View className="w-full border-2 h-16 px-4 bg-black-100/50 flex-row rounded-lg focus:border-secondary items-center ">
                <TextInput
                    className="flex-1 text-base  text-white font-psemibold px-4"
                    value={value}
                    placeholder={placeholder}
                    onChangeText={handelChangeText}
                    placeholderTextColor={'gray'}
                    secureTextEntry={title === 'Password' && !showPassword}
                />
                {title === "Password" &&
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            resizeMode='contain'
                            className={" w-6 h-6"}
                            source={!showPassword ? icons.eye : icons.eyeHide} />
                    </TouchableOpacity>

                }
            </View>
        </View>
    )
}

export default FormFeild