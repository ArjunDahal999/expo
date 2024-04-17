import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ title, handlePress, containerStyles, textStyles, isLoading }) =>
{
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}
            className={` ${containerStyles} ${isLoading ? ' opacity-50' : ''}
        bg-secondary rounded-xl min-h-[62px]  justify-center items-center`} >
            <Text className={` ${textStyles} text-lg font-psemibold text-primary `}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button