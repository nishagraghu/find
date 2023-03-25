import React from 'react';
import { View,  StyleSheet ,Text} from 'react-native';
// import { Text } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'; 

const Price: React.FC = () => {
    return (
        <View style={styles.Price}>
              <FontAwesome name="inr" size={24} color="black" />
            <Text style={styles.Pricevalue}  >1000 </Text>
           
        </View>
    );
};

const styles = StyleSheet.create({
    Pricevalue:{
    marginLeft: 10,
    // fontSize:
    fontWeight:'bold'
    },
    container: {
        flex: 1,

        backgroundColor: '#fcfcfc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {

        flex: 0.6,

    },
    container2: {
        flex: 0.4,

    },
    text: {

        textAlign: 'center',
        textAlignVertical: 'center',
    },
    Price: {
       flex:1,
       flexDirection:'row'

    }
});

export default Price;