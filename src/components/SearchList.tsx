import { useCallback, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { useNavigation } from '@react-navigation/native';
import { getSearchList, getModelList, getYearRange, getVariant } from '../store/service/FilterService';
import { setFilter } from '../store/slices/filterSlice';
import RenderBrand from './RenderBrand';
import { Text as PaperText } from 'react-native-paper';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
interface FilterValue {
  id: number;
  value: string;
  logo?: string;
}
interface RouteParams {
  filter: string;
  filtervalue?: FilterValue;
  search: string;
}
const windowHeight = Dimensions.get('window').height;
const SearchList = (props: RouteParams) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const { filter, filtervalue, search } = props;
  const { loading, brands, models, yearofmakes, variants } = useSelector((state: RootState) => state.filterInfo);
  console.log({loading})
  useEffect(() => {
    if (props.filter == 'Manufacturer') {
      dispatch(getSearchList());
    } else if (props.filter == 'Model') {
      const filtervalue = props.filtervalue?.id || 0;
      dispatch(getModelList({
        brantId: filtervalue
      }));
    } else if (props.filter == 'Year Range') {
      const filtervalue = props.filtervalue?.id || 0;
      dispatch(getYearRange({
        ModelId: filtervalue
      }));
    } else if (props.filter == 'Variant') {
      const filtervalue = props.filtervalue?.id || 0;
      dispatch(getVariant({ YearId: filtervalue }));
    }

  }, [dispatch, props]);
  // 
  const filterByValue = (data: { id: number; value: string; logo?: string }[], value: string) => {
    if (data.length > 0 && (value != ''))
      return data.filter((item) => item.value.toLowerCase().includes(value.toLowerCase()));
    else
      return data
  }
  const getFilterData = useCallback(() => {

    if (filter === 'Manufacturer') {
      return filterByValue(brands, search);
    } else if (filter === 'Model') {
      return filterByValue(models, search);
    } else if (filter === 'Year Range') {
      return filterByValue(yearofmakes, search);
    } else if (filter === 'Variant') {
      return filterByValue(variants, search);
    }
    return [];
  }, [filter, brands, models, yearofmakes, variants, search]);
  const listData = getFilterData();
  useEffect(() => {
    if (props.filter == 'Manufacturer') {
      dispatch(getSearchList());

    } else if (props.filter == 'Model') {
      const filtervalue = props.filtervalue?.id || 0;
      dispatch(getModelList({
        brantId: filtervalue
      }));

    } else if (props.filter == 'Year Range') {
      const filtervalue = props.filtervalue?.id || 0;

      dispatch(getYearRange({
        ModelId: filtervalue
      }));
    } else if (props.filter == 'Variant') {
      const filtervalue = props.filtervalue?.id || 0;
      dispatch(getVariant({ YearId: filtervalue }));
    }

  }, [dispatch, props]);



  const handlePress = (item: { id: number; logo?: string; value: string }) => {
    if (props.filter == 'Manufacturer') {
      dispatch(setFilter({ field: 'selectedbroand', value: item }));
    } else if (props.filter == 'Year Range') {
      dispatch(setFilter({ field: 'selectedyearofmake', value: item }));

    } else if (props.filter == 'Variant') {
      dispatch(setFilter({ field: 'selectedvariant', value: item }));

    }
    else {
      dispatch(setFilter({ field: 'selectedModel', value: item }));

    }



    navigation.navigate('Home')

  };
  
  return !loading ? (
    <View style={[styles.list, { height: windowHeight - 200 }]}>
     {(listData.length==0)? <PaperText style={styles.error} variant="headlineSmall"  > No Record Found</PaperText>: <Text> </Text>}
      <FlatList
        data={listData}
        renderItem={({ item }) => <RenderBrand item={item} onPress={() => handlePress(item)} />}
        keyExtractor={(item) => item.value}
        horizontal={false}
      />
      
    </View>
  ) : (
    <ActivityIndicator animating={true} color={MD2Colors.red800} />
  );
  // return (
  //   <View style={[styles.list, { height: windowHeight - 200 }]}>
  //     {!loading ? <FlatList
  //       data={listData}
  //       renderItem={({ item }) => <RenderBrand item={item} onPress={() => handlePress(item)} />}
  //       keyExtractor={(item) => item.value}
  //       horizontal={false}
  //     /> :  <ProgressBar progress={0.5} color={MD3Colors.error50} />}

  //   </View>
  // )


};


const styles = StyleSheet.create({
  list: {
    marginLeft: 10,
  },
  error:{
    textAlign:'center',
    marginTop:'10%'
  }
});

export default SearchList;
