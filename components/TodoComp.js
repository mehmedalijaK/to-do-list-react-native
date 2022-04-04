import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'; 

export default function TodoComp({ item, pressHandler }){

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item:{
        padding:15,
        marginTop:15,
        borderColor: "grey",
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})