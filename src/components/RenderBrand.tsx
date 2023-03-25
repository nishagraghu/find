import {  StyleSheet, Text ,TouchableOpacity} from 'react-native';
import {  useAppDispatch } from '../store/store';
import {setFilter } from '../store/slices/filterSlice';


interface ListItem {
  id?: number;
  value: string;
  logo?: string;
}

const RenderBrand = ({ item , onPress  }: { item: ListItem ,onPress:()=>void  }) => {
  //  const dispatch = useAppDispatch();
  
 

  return (
    <TouchableOpacity onPress={onPress}>  
      <Text style={styles.item}>{item.value}  </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default RenderBrand;
