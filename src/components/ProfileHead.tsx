import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

const ProfileHead = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.co1}>
          <Avatar.Text size={90} label="NR" />
        </View>
        <View style={styles.co2}>
          <Text variant="headlineSmall" style={styles.header}>Nishag R</Text>
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
  },
});

export default ProfileHead;
