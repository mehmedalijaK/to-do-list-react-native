import React , {useState} from 'react';
import { StyleSheet, TextInput, View, Button, TouchableHighlight, Text} from 'react-native'; 

export default function addTask({submitTask}){

    const [text, setText] = useState('');
    
    
    const changeHandler = (val) =>{
        setText(val);
    }


    return(
        <View>
            <TextInput
            style = {styles.input}
            placeholder='Type new task...'
            onChangeText={(val) => changeHandler(val)}
            
            />

            <TouchableHighlight 
            onPress={() => submitTask(text)}
            style = {styles.Button}>
                <Text style={styles.buttonText}>ADD TASK</Text>
            </TouchableHighlight>

        </View>
    )




}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    Button:{
        height: 50,
        marginHorizontal: 70,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4287f5',
        
    },
    buttonText:{
        color: 'white',
    },



})