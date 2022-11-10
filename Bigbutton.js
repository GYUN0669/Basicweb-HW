import React from "react";
import { Text,View,StyleSheet, Button } from "react-native";

const BigButton = () => {
    return (
    <View style={styles.container}>    
        <View style={styles.button}>
            <Text style={styles.text}>내려야할 정류장</Text>
            <Text style={styles.Plus}>+</Text>
        </View>
        <View style={styles.buttonline}></View>
    </View>    
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#D3D3D3',
        justifyContent: 'center',
        alignItems:'center',
      },
    button:{
        backgroundColor:'#FFFFFF',
        marginTop:10,
        width:'90%',
        height:'85%',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:30,
        color:'#FF8730',
    },
    Plus:{
        fontSize:100,
        color:'#FF8730',
    },
    buttonline:{
        backgroundColor:'black',
        width:'100%',
        height:'0.5%',
        marginTop:120,
    },
})

export default BigButton;