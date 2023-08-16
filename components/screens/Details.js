import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'

export default function Details() {
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.txt}>Details</Text>
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