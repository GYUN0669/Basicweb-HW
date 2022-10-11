import React from "react";
import {Text, View} from 'react-native';
import Counter from "./Components/Counter";
// import MyButton from "./Components/MyButton";

const App = ()=> {
    return (
        <View style ={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
            <Counter/>
        {/* <Text style = {{fontSize: 30, marginBottom:10 }}>Props</Text> */}
        {/* <MyButton title="Button" onPress={() => alert('props')}/> */}
        {/* <MyButton title="Button" onPress={() => alert('children')}> */}
            {/* Children Props */}
        {/* </MyButton> */}
        {/* <MyButton onPress={()=> alert('default')}/>     */}
    </View>    
    );
};

export default App;