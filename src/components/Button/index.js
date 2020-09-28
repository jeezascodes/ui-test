import React from 'react';
import {View, Text} from 'react-native';

const Button = ({message = 'hello world'}) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default Button;
