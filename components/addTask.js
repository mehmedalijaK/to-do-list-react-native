import React , {useState} from 'react';
import { StyleSheet, TextInput, View, Button} from 'react-native'; 

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
            <Button 
            style = {styles.addbutton} 
            onPress={() => submitTask(text)} 
            title='add task' 
            />
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



})