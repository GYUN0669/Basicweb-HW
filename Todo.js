import React, {useState} from "react";
import { Text, View, StyleSheet,TextInput,Dimensions, TouchableOpacity, ScrollView, Keyboard, KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import Task from "../component/Task";

export default function App() {

  const [newTask, setNewTask] = useState('');

  const _addTask = () =>{
  alert(`Add: ${newTask}`);
  setNewTask('');
  };

  const _handleTextChange = text => {
  setNewTask(text);
  };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>ToDo List</Text>
        <TouchableOpacity style={styles.Icon}>
          <Ionicons style={styles.Icon} name="checkbox-outline" size={30} color="black"/>
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="+ Add a task" maxLength={50} autoCapitalize="none" autoCorrect={false} returnKeyType="done"
        value={newTask} onChangeText={_handleTextChange} onSubmitEditing={_addTask}/>
        <StatusBar style="light-content"/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#79ECFF',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    title: {
      fontSize: 40,
      fontWeight: '600',
      color: 'black',
      marginTop: 30,
      marginLeft:15,
      alignSelf:'flex-start'
    },
    input: {
      width: Dimensions.get('window').width - 15,
      fontSize: 20,
      backgroundColor: '#f1f3f5',
      borderWidth: 1,
      borderRadius: 5,
      margin: 5,
      padding: 8,
      alignItems: 'center',
    },
    Icon: {
      alignSelf:"flex-end",
      marginRight:10 ,
    },
    Scroll:{
      width: Dimensions.get('window').width,
      flex:1,
    },
  });