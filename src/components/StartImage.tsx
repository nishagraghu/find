import React from 'react';
import { View, Image } from 'react-native';
import myImage from '../../assets/login.png';
const StartImage : React.FC  = () => {
  return (
    <View>
      <Image
        source={myImage}
        style={{ width: 400, height: 400 }}
      />
    </View>
  );
};

export default StartImage;
