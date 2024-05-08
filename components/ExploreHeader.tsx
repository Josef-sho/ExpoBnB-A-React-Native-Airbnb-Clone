import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';


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
        <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}> 
            <View style={styles.container}> 
            <View style={styles.actionrow}>
                <Link href={'/(modals)/booking'} asChild>
                    <TouchableOpacity style={styles.searchbtn}>
                        <Ionicons name='search' size={24}/>
                        <View>
                            <Text style={{fontFamily:'mon-sb'}}>Where To?</Text>
                            <Text style={{fontFamily:'mon', color:Colors.grey}}> Anywhere . Anyweek</Text>
                        </View>
                    </TouchableOpacity>
                </Link>
                <TouchableOpacity style={styles.filterbtn}>
                    <Ionicons name='options-outline' size={24} />
                </TouchableOpacity>
            </View>
                <ScrollView horizontal>
                    { categories.map((item, index) => (
                        <TouchableOpacity>
                            <MaterialIcons name={item.icon as any} size={24}/>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
        container:{
            height: 130,
            backgroundColor: '#fff',
                
        },
        actionrow:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'space-between',
            paddingHorizontal:24,
            paddingBottom:16,
            gap:10,

        },
        filterbtn:{
                padding: 10,
                borderWidth: 1,
                borderColor: Colors.grey,
                borderRadius: 24,
        },
        searchbtn:{
            flexDirection:'row' ,
            alignItems:'center',
            gap:10,
            borderColor:'#c2c2c2',
            borderWidth:StyleSheet.hairlineWidth,
            flex:1,
            padding:14,
            borderRadius:30,
            backgroundColor:'#fff',
            elevation:2,
            shadowColor:'#000',
            shadowOpacity:0.12,
            shadowRadius: 8,
            shadowOffset: {
                width:1,
                height:1,
            },

        }
})

export default Exploreheader