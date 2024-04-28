import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import Exploreheader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'

const page = () => {
  return (
    <View style={{flex:1}}>
      <Stack.Screen
      options={
        {
            header:() => <Exploreheader/>,
        }
      }/>
      <Listings />
    </View>
  )
}

export default page