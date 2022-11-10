import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"

const Adult = () => {
    return(
        <View style={styles.container}>
                <View style={styles.Box}>
                    <TouchableOpacity
                    onPress={() => alert('OK')}
                    >
                        <Text style={styles.Text}>보호자</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Box}>
                    <TouchableOpacity
                    onPress={() => alert('NO')}
                    >
                        <Text style={styles.Text}>자녀</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#D3D3D3',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
    Box:{
        backgroundColor:'#FF8730',
        height:'40%',
        width:'85%',
        borderRadius: 15,
        marginTop:50,
        alignItems:'center',
        justifyContent:'center',
    },
    Text:{
        fontSize:40,
        color:'black',
    },
})

export default Adult;
// 부모 자녀 선택 화면