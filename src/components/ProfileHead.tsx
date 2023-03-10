import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { useStore, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
const getFirstAndLastCharacter = (str : string) => { 
 
    if(str==null){
        return 'NA';
    }
    const firstChar = str.charAt(0);
    const lastChar = str.charAt(str.length - 1);
    const result = firstChar + lastChar;
    return result.toUpperCase();
  }
const ProfileHead = () => {
  const {name  } = useSelector((state: RootState) => state.userInfo) || '';

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.co1}>
          <Avatar.Text size={90} label={getFirstAndLastCharacter(name)} />
        </View>
        <View style={styles.co2}>
          <Text variant="headlineSmall" style={styles.header}>{name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  co1: {
    flex: 0.3,
    flexDirection: 'row-reverse',
  },
  co2: {
    flex: 0.7,
   
    marginVertical: 20,
    marginHorizontal: 20,
  
  },
  header: {
    fontWeight: 'bold',
    textTransform:'uppercase'
  },
});

export default ProfileHead;
