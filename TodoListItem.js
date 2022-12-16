import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ProgressBar from 'react-native-progress/Bar';


const { width, height } = Dimensions.get("window");

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onToggle(id)}>
                {checked ? (
                    <View style={styles.checkbox}>
                        <MaterialCommunityIcons name="checkbox-outline" size={30} color="black" />
                    </View>
                ) : (
                    <View style={styles.check_B}>
                        <MaterialCommunityIcons name="checkbox-blank-outline" size={30} color="black" />    
                    </View>
                )}
            </TouchableOpacity>
            <Text style={[styles.text, 
                checked? styles.strikeText : styles.unstrikeText,]}>
                {textValue}
                <View style={styles.Barcontainer}>
                <ProgressBar width={200} height={10} color={"rgba(80, 65, 159, 0.8)"} marginTop={10} bouciness={0} progress={checked/10}/>
                </View>
            </Text>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text onPress={onRemove(id)}>
                    <MaterialIcons name="delete-forever" size={30} color="red" />
                </Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: width - 70,
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Barcontainer: {
        width: width - 70,
        flex: 1,
        marginTop:20,
        borderBottomColor: '#bbb',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
        width: 100,
    },
    check_B: {
        marginRight: 20,
        marginLeft: 5,
    },
    checkbox: {
        marginRight: 20,
        marginLeft: 5,
    },
    number:{
        marginRight:5,
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c',
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default TodoListItem;