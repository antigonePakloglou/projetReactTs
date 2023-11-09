import { View, Text } from 'react-native'
import React from 'react'
import {Link} from "expo-router"

const list = () => {
  return (
    <View>
      <Text>list</Text>
      <Link href="/list/1">NEWS ONE</Link>
      <Link href="/list/2">NEWS TWO</Link>
      <Link href="/list/3">NEWS THREE</Link>
    </View>
  )
}

export default list