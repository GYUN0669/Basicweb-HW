import * as React from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity,} from "react-native"
import { Button, TextInput } from "react-native-paper";
const { width, height } = Dimensions.get("window");
import { Ionicons } from '@expo/vector-icons';

const MyInfo = () => {
    const [text, onChangeText] = React.useState("내 정보를 입력해주세요!");

    return(
        <View style={styles.container}>
            <Text style={styles.Text}>
                내정보                    <TouchableOpacity><Ionicons style={styles.icon} name="settings" size={35} color="black" /></TouchableOpacity>
            </Text>
                <TextInput style={styles.InfoBox}
                    onChangeText={onChangeText}
                    value={text}
                />
            <View style={styles.IngBox}>
                <TouchableOpacity style={{backgroundColor:'#FFFFFF',padding:20,margin:12,borderRadius:8,}}
                onPress={() => alert('연결!')}
                >
                    <Text style={styles.buttonText}>참여중인 스터디 </Text>
                </TouchableOpacity>
                    <View style={{borderBottomColor:'#000000',borderBottomWidth:1}}></View>
                <TouchableOpacity style={{backgroundColor:'#FFFFFF',padding:20,margin:12,borderRadius:8}}
                onPress={() => alert('연결!')}
                >   
                    <Text style={styles.buttonText}>일정 캘린더 </Text>
                </TouchableOpacity>
                    <View style={{borderBottomColor:'#000000',borderBottomWidth:1}}></View>
                <TouchableOpacity style={{backgroundColor:'#FFFFFF',padding:20,margin:12,borderRadius:8,}}
                onPress={() => alert('연결!')}
                >
                    <Text style={styles.buttonText}>승인대기중인 스터디 </Text>
                </TouchableOpacity>
                    <View style={{borderBottomColor:'#000000',borderBottomWidth:1}}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFFFFF',
        flex:1,
    },
    InfoBox:{
        backgroundColor:"#FF8730",
        width:'90%',
        flex:1,
    },
    IngBox:{
        backgroundColor:"#B2B2B2",
        width:'90%',
        marginTop:10,
        marginBottom:30,
        flex:2,
    },
    Text:{
        Color:"black",
        fontSize:36,
        alignSelf:'flex-start',
        marginTop:50,
        marginLeft:30,
        marginBottom:10,
    },
    buttonText:{
        Color:"black",
        fontSize:30,
    }
})

export default MyInfo;