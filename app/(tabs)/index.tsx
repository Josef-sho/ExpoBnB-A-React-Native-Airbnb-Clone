import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import Exploreheader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'

const page = () => {
  const onDataChanged = (category: string) => {
    console.log('Changed_data', category)
  }
  return (
    <View style={{flex:1}}>
      <Stack.Screen
      options={
        {
            header:() => <Exploreheader onCategoryChanged={onDataChanged}/>,
        }
      }/>
      <Listings />
    </View>
  )
}

export default page