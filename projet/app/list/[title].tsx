import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useSearchParams } from 'expo-router';

const DetailsPage = () => {
    const {title} = useSearchParams();
  return (
    <View>
        <Stack.Screen options={{headerTitle: `Details #${title}`}} />
      <Text>DetailsPage fort : {title}</Text>
    </View>
  )
}

export default DetailsPage