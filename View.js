import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import Button from "../../components/button";

const Dep = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.Text}>출발</Text>
                <View style={styles.Box}>
                </View>
            <Text style={styles.Text}>도착</Text>    
                <View style={styles.Box}>
                </View>
            <Text style={styles.Text}>환승</Text>    
                <View style={styles.Box}>
                </View>
            <Text style={styles.Text}>빠른 설정</Text>    
                <View style={styles.Box}>
                </View>
                <Button/>       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#D3D3D3',
        flex: 1,
        justifyContent: 'center',
      },
    Box:{
        backgroundColor:'white',
        height:'10%',
        width:'90%',
        borderRadius: 15,
        margin:10,
        alignItems:'center',
        justifyContent:'center',
    },
    Text:{
        fontSize:30,
        color:'black',
    },
})

export default Dep;
//출발지 목적지 설정 화면