import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Link } from '@react-navigation/native'

const Page = () => {
  const { signOut, isSignedIn } = useAuth()
  return (
    <View>
      <Button title='Logout' onPress={() => signOut()}/>
     {!isSignedIn && ( <Link to={'/(modals)/login'}><Text>Login</Text></Link> )}
    </View>
  )
}

export default Page