import { StyleSheet, Text, View,SafeAreaView,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Details2() {
    const navigation=useNavigation()

    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.txt}>Details2</Text>
        <Button title='Details' onPress={()=>navigation.navigate('Login')} />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#green',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        textAlign:'center',
    },
    txt:{
        fontSize:48,
        fontWeight:'bold',
    }
})