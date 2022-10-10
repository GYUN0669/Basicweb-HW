import React from "react";
import {Text, View} from 'react-native';
import MyButton from "./Components/MyButton";

const App = ()=> {
    return (
        <View style ={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
        <Text style = {{fontSize: 30, marginBottom:10 }}>My Button Component</Text>
        <MyButton/>
    </View>    
    );
};

export default App;