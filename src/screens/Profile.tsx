import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { Avatar, List, MD3Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Text as Ptext } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Profile() {
  const navigation = useNavigation<any>();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
    });
  }, [navigation]);

  return (
    
       <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.co1}>
          <Avatar.Text size={90} label="NR" />
        </View>
        <View style={styles.co2}>
          <Ptext variant="headlineSmall" style={styles.header}>Nishag R</Ptext>

        </View>
      </View>
      <View style={styles.row}>
        <List.Section style={styles.section}>
          <List.Subheader style={styles.text}>
            <Ionicons name="call-outline" size={24} /> &nbsp;&nbsp;  8867460746
          </List.Subheader>
          <List.Subheader style={styles.text}>
            <Ionicons name="mail-outline" size={24} /> &nbsp;&nbsp;  nishag619@gmail.com
          </List.Subheader>
          <List.Section>
          <List.Item


            title="MY Notifications"

            titleStyle={styles.list}
            left={() => <List.Icon icon="bell-outline" color='#1877F2' />}
            right={() => (
              <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
            )}
            />
          <List.Item
            title="Whatsapp US"
           
            titleStyle={styles.list}
            left={() => (
              <Ionicons name="logo-whatsapp" size={24} color="#1877F2" />
            )}
           
            right={() => (
              <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
            )}
            style={{ justifyContent: 'flex-end' }}
          />

          <List.Item
            title="Delivery Addresses"

            titleStyle={styles.list}
            left={() => (
              <Ionicons name="location-outline" size={24} color="#1877F2" />
            )} 
            right={() => (
              <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
            )}
          />
          <List.Item
            title="Need Help"

            titleStyle={styles.list}
            left={() => <List.Icon icon="help-circle-outline" color="#1877F2" />} 
            right={() => (
              <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
            )}
            />
          <List.Item
            title="Whatsapp US"

            titleStyle={styles.list}
            left={() => (
              <Ionicons name="logo-whatsapp" size={24} color="#1877F2" />
            )}
            right={() => (
              <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
            )}
          />

          <List.Item
            title="Legal Information"

            titleStyle={styles.list}
            left={() => (
              <Ionicons name="document-outline" size={24} color="#1877F2" />
            )}
            right={() => (
              <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
            )}
          />
          <List.Item
            title="My Enquery"

            titleStyle={styles.list}
            left={() => (
              <Ionicons name="cube-outline" size={24} color="#1877F2" />
            )}
            right={() => (
              <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
            )}
          />
          <List.Item
            title="Logout"

            titleStyle={{ width: 500, color: "red", fontWeight:'bold'}}
            left={() => (
              <Ionicons name="log-in-outline" size={24} color="red" />
            )}
            right={() => (
              <Ionicons name="chevron-forward-outline" size={24}  style={{ marginLeft: 'auto' }} />
            )}
          />

        </List.Section>

        </List.Section>


     
      </View>


      
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold'
  },
  list: {
    minWidth: 430,
    fontWeight:'bold'
    // color: '#1877F2'
  },
  text: {
    color: 'gray'
  },
  co2: {
    color: 'blue',
    flex: 0.70,

    // alignItems: 'flex-start',
    marginVertical: 20,
    marginHorizontal: 20
    // justifyContent: 'flex-start'
  },
  co1: {
    flex: 0.30,
    flexDirection: 'row-reverse',

  },
  row: {
    flexDirection: 'row',
    marginLeft: 10,


  },
  section: {
    marginTop: 20,
    flex: 1,
    // backgroundColor: 'red',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  container: {
    // flex: 1,

    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
