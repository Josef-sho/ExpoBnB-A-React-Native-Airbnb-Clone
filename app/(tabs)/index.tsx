import { View, Text } from 'react-native'
import React from 'react'
import { Link, Tabs } from 'expo-router'

const Layout = () => {
  return (
    <View>
      <Link href={'/(modals)/booking'} >
        Booking 
      </Link>
      <Link href={'/(modals)/login'} >
        Login 
      </Link>
      <Link href={'/listings/1395'} >
        Listings 
      </Link>
    </View>
  )
}

export default Layout