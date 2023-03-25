import React from 'react';
import { FlatList, View, StyleSheet, Text, Dimensions } from 'react-native';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { useNavigation } from '@react-navigation/native';

import { getSearchList } from '../store/service/FilterService';
import {setFilter } from '../store/slices/filterSlice';

import RenderBrand from './RenderBrand';

const windowHeight = Dimensions.get('window').height;

const SearchList = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const { loading, brands ,models } = useSelector((state: RootState) => state.filterInfo);


  React.useEffect(() => {
    
    //  dispatch(getSearchList());
   
  }, [dispatch]);

  const handlePress = (item: { id:number; logo?: string; value: string }) => {
     dispatch(setFilter({field:'selectedbroand',value: item}));
    navigation.navigate('Home' )

  };

  return !loading ? (
    <View style={[styles.list, { height: windowHeight - 200 }]}>
       
      <FlatList
        data={brands}
        renderItem={({ item }) => <RenderBrand item={item} onPress={() => handlePress(item)} />}
        keyExtractor={(item) => item.value}
        horizontal={false}
      />
    </View>
  ) : (
    <Text>Loading...</Text>
  );
};

const styles = StyleSheet.create({
  list: {
    marginLeft: 10,
  },
});

export default SearchList;
