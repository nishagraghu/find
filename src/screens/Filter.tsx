
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect,useState } from 'react';
import { TextInput, Button, Divider, Text as Ptext, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { updateForm } from '../store/slices/userInfoSlice';
import { save } from '../store/service/secure-store-utils';
import SearchList from '../components/SearchList';
import { useRoute } from '@react-navigation/native';

import { getSearchList } from '../store/service/FilterService'
interface FilterValue {
    id: number;
    value: string;
    logo?: string;
}

interface RouteParams {
    filter: string;
    filtervalue?: FilterValue;

}

export default function Filter() {

    const dispatch = useAppDispatch();
    const route = useRoute();
    const [search,setSearch]=useState('')
    
    const { filter, filtervalue }: RouteParams = route.params as RouteParams;
   
    const navigation = useNavigation<any>();
    const { name, email, address1, address2, city, state, pincode } = useSelector((state: RootState) => state.userInfo) || '';
    const handleBrandChange = (value: string) => {
        setSearch(value)
        // dispatch(updateForm({ field: 'selectedbrand', value }));
    };
    const handleEmailChange = (value: string) => {
        dispatch(updateForm({ field: 'email', value }));
    };
   const  label= `Select ${filter}`  


    return (

        <View style={styles.viewcontainer} >
          {/* <Text>{filter}</Text> */}
            <TextInput
                mode="outlined"
                label={label}
                placeholder={label}
                style={styles.textinput}
                contentStyle={styles.contenttext}
                 value={search}
                onChangeText={handleBrandChange}
            // onFocus ={() => navigation.navigate('EditAddress')}
            // editable={false}

            />
            <Text style={styles.smalltitle} > Populer {filter} </Text>
            <SearchList filter={filter} search={search}    filtervalue={filtervalue}/>

           








        </View>

    );
}

const styles = StyleSheet.create({

    smalltitle: {
        marginLeft: 10,
        color: 'black'
    },
    viewcontainer: {
        backgroundColor: 'white',
    },
    col8: {
        paddingLeft: 10,
        flex: 0.75
    },
    col4: {
        flex: 0.25,
    },
    displayAddres: {
        flex: 0.3,
        flexDirection: 'row',
    },
    Addres: {
        marginHorizontal: 20,
        marginVertical: 10,
        // marginLeft: 10,
        fontWeight: 'bold'
    },
    contenttext: {

    },
    textinput: {
        width: '90%',
        // alignItems:'center',
        marginLeft: 10,
        // marginTop:10,
        //  marginHorizontal:50,
        marginVertical: 10

    },
    formcontainer: {

        alignItems: 'center'
    },
    container: {
        flex: 1,
        paddingTop: '5%',
        backgroundColor: 'white'

    },
    item: {
        marginLeft: 10,
        padding: 10,
        fontSize: 18,
        height: 44,
        fontWeight: 'bold'
    },
});
