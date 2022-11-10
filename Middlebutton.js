import React from "react";
import { Text,View,StyleSheet} from "react-native";

const MiddleButton = () => {
    return (
    <View style={styles.container}>    
        <View style={styles.button}>
            <Text style={styles.text}>목적지</Text>
            <Text style={styles.text}>내려야할곳</Text>
        </View>
        <View style={styles.button}>
            <Text style={styles.text}>설정 시간</Text>
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
        height:'35%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
    },
    buttonline:{
        backgroundColor:'black',
        width:'100%',
        height:'0.5%',
        marginTop:120,
    },
    text:{
        fontSize:30,
        color:'#FF8730',
    },
    Plus:{
        fontSize:100,
        color:'#FF8730',
    },
})

export default MiddleButton;