import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoComp from './components/TodoComp';
import AddTask from './components/addTask';

export default function App() {

  const[todos, setTodos] = useState([
    { text: 'pray 5 times daily', key: '1'},
    { text: 'make cool apps with vojin and laki', key: '2'},
    { text: 'go to the gym', key: '3'},
    { text: 'send an email to a professor', key: '4'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }
  
  const submitTask = (text) => {
    setTodos((prevTodos)=>{
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    })
  }


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTask submitTask = {submitTask} />
        <View style = {styles.list}>
          <FlatList
          data = {todos}
          renderItem={({item})=>(
          <TodoComp item={ item } pressHandler={pressHandler}/>
          )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
  },
  list:{
    marginTop: 20,
  },
});
