import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { Text ,Button  } from 'react-native-paper';
import React from 'react';
import Price from '../components/Price';

export default function Products() {


    return (

        <View style={styles.container}>

            <View style={styles.row}>
                <View style={styles.col4}>
                    <Image
                        source={{ uri: 'https://picsum.photos/700' }}
                        style={{ width: 150, height: 150 }}
                    />
                </View>
                <View style={styles.col8}>
                    <Text variant="titleLarge" >demo1</Text>
                    <Text variant="bodySmall" >demo test hgshds mhvahgsfd asdg khkasd</Text>
                    <View style={styles.container2}>
                        <View style={styles.col5}>

                           <Price />
                        </View>
                        <View style={styles.colbtn}>
                            
                            <Button  mode="contained" onPress={() => console.log('Pressed')}>
                                Enquery
                            </Button>

                        </View>

                    </View>

                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    button:{

    //  marginRight:10,
    },
    col8: {
        paddingLeft: 5,
        flex: 0.6,
        // backgroundColor:'red'
    },
    col5: {
        paddingTop: 20,
        flex: 0.5,
    },
    colbtn: {
        paddingTop: 20,
        flex: 0.5,
        paddingRight:10
    },
    col4: {
        flex: 0.4,
    },
    row: {
        marginTop: 10,
        flex: 0.25,

        flexDirection: 'row'
    },
    container2: {
        flex: 1,
        flexDirection: 'row'

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
