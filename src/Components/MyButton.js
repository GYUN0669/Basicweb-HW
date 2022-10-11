import React from 'react';
import {TouchableOpacity,Text, Linking} from 'react-native';
import PropTypes from 'prop-types';

const MyButton = Props => {
    return (
        <TouchableOpacity
        style={{
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8,
        }}
        onPress ={()=>Props.onPress()}
        >
            <Text style={{color: 'white', fontSize: 24}}>
            {Props.children||Props.title}
            </Text>
        </TouchableOpacity>
    );
};

MyButton.defaultProps = {
    title:'Button',
};

MyButton.propTypes ={
    title:PropTypes.string.isRequired,
};

export default MyButton;