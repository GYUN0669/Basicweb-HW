import * as React from "react";
import { Text, View, StyleSheet, Dimensions} from "react-native"
const { width, height } = Dimensions.get("window");

const MyInfo = () => {
    return(
        <View style={styles.container}>
            <View style={styles.InfoBox}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFFFFF',
    },
    InfoBox:{
        backgroundColor:"#FF8730",
        width:'80%',
        height:'50%',
    },
})

export default MyInfo;