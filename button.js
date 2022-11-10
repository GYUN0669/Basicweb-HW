import React from "react";
import { Text,View,StyleSheet } from "react-native";

const Button = () => {
    return (
    <View style={styles.container}>    
        <View style={styles.button}>
            <Text style={styles.text}>등록</Text>
        </View>
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
        backgroundColor:'#FF8730',
        marginTop:10,
        width:80,
        height:40,
        alignItems:'center',
    },
    text:{
        fontSize:30,
        color:'black',

    },
})

export default Button;