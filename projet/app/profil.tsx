import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const profil = () => {
  return (
    <View>
      <Text>home</Text>
      <Pressable onPress={()=> router.replace("/")}>
        <Text>Go back to index</Text>
      </Pressable>
    </View>
  )
}

export default profil