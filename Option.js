import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BigButton from "../../components/Bigbutton";

const Op = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>###님의 자녀 ###</Text>
            <BigButton/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#D3D3D3',
        flex: 1,
    },
    text: {
        marginLeft:10,
        marginTop:50,
        fontSize:28,
        color:'black',
    },  
})

export default Op;