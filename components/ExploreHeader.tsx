import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native';


const categories=[
    {
        name: 'Tiny homes' ,
        icon: 'home'
    },
    {
        name: 'Cabins' ,
        icon: 'house-siding'
    },{
        name: 'Trending' ,
        icon: 'local-fire-department'
    },
    {
        name: 'Play' ,
        icon: 'Video-game-asset'
    },
    {
        name: 'city' ,
        icon: 'apartment'
    },
    {
        name: 'Beachfront' ,
        icon: 'beach-access'
    },{
        name: 'Countryside' ,
        icon: 'nature-people'
    }
]

const Exploreheader = () => {
    return (
        <View>
            <View style={styles.container}> 

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
        container:{
                
        }
})

export default Exploreheader