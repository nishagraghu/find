
import { StyleSheet, Text, Platform, View, ScrollView, Linking, Share } from 'react-native';
import React from 'react';
import { Avatar, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Text as Ptext, Button, Snackbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import LogOutPopup from '../components/LogOutPopup';
import ProfileHead from '../components/ProfileHead';
import UserInfo from '../components/Userinfo';


export default function Profile() {

  const navigation = useNavigation<any>();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
    });
  }, [navigation]);
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const [logout, setLogout] = React.useState<boolean>(false);
  const openWhatsApp = () => {
   
    const url = `whatsapp://send?phone=${8867460746}`;
    Linking.canOpenURL(url)
      .then((supported) => {

        if (!supported) {

          onToggleSnackBar()
          // console.log(`WhatsApp is not installed on ${Platform.OS}`);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => {

        console.error('An error occurred', err)
      });
  };
  // const [visible, setVisible] =
  return (

    <ScrollView style={styles.container}>
      <ProfileHead />
      <View style={styles.row}>
        <List.Section style={styles.section}>
          <UserInfo />
          {/* <List.Subheader style={styles.text}>
            <Ionicons name="call-outline" size={24} /> &nbsp;&nbsp;  8867460746
          </List.Subheader>
          <List.Subheader style={styles.text}>
            <Ionicons name="mail-outline" size={24} /> &nbsp;&nbsp;  nishag619@gmail.com
          </List.Subheader> */}
          <List.Section>
            {/* <List.Item


            title="MY Notifications"

            titleStyle={styles.list}
            left={() => <List.Icon icon="bell-outline" color='#1877F2' />}
            right={() => (
              <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
            )}
            /> */}

            <List.Item
              title="My Profile"
              
              titleStyle={styles.list}
              left={() => (
                <Ionicons name="person-circle-outline" size={24} color="#1877F2" />
              )}

              right={() => (
                <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
              )} 
              onPress={() => navigation.navigate('EditScreen')}
              style={{ justifyContent: 'flex-end' }}
            />
            {/* <List.Item
              title="Whatsapp US"

              titleStyle={styles.list}
              left={() => (
                <Ionicons name="logo-whatsapp" size={24} color="#1877F2" />
              )}

              right={() => (
                <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
              )}
             
              style={{ justifyContent: 'flex-end' }}
            /> */}

            <List.Item
              title="Delivery Addresses"

              titleStyle={styles.list}
              left={() => (
                <Ionicons name="location-outline" size={24} color="#1877F2" />
              )}
              right={() => (
                <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
              )} 
              onPress={() => navigation.navigate('EditAddress')}

            />
            <List.Item
              title="Need Help"

              titleStyle={styles.list}
              left={() => <List.Icon icon="help-circle-outline" color="#1877F2" />}
              right={() => (
                <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
              )}
              onPress={() => navigation.navigate('HelpScreen')}

              
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
              // openWhatsApp 

              // onPress={()=>openWhatsApp}

              onPress={() => Linking.openURL('whatsapp://send?phone=8867460746')}
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
              onPress={() => navigation.navigate('LegalInformation')}

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
              title="share App"

              titleStyle={styles.list}
              left={() => (
                <Ionicons name="share-social-outline" size={24} color="#1877F2" />

              )}
              right={() => (
                <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
              )}
              onPress={() => {
                Share.share({
                  message: 'Check out this awesome app!',
                  url: 'https://example.com/app',
                  title: 'My Awesome App',
                })
                  .then(result => console.log(result))
                  .catch(error => console.log(error));
              }}
            />
            <List.Item
              title="Helpline (6AM - 10PM)"

              titleStyle={styles.list}
              left={() => (
                <Ionicons name="call-outline" size={24} color="#1877F2" />

              )}
              right={() => (
                <Button buttonColor='red' mode="contained" onPress={() => Linking.openURL(`tel:${8867460746}`)}>
                  call
                </Button>
              )}
            />
            <List.Item
              title="Logout"

              titleStyle={{ width: 500, color: "red", fontWeight: 'bold' }}
              left={() => (
                <Ionicons name="log-in-outline" size={24} color="red" />
              )}
              right={() => (
                <Ionicons name="chevron-forward-outline" size={24} color="#1877F2" style={{ marginLeft: 'auto' }} />
              )}
              onPress={() => {
                // add your logout logic here
              
                setLogout(true)
              }}
            />

          </List.Section>

        </List.Section>


        <LogOutPopup visible={logout} setVisible={setLogout} />
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            },
          }}>
          Hey there! I'm a Snackbar.
        </Snackbar>
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
    fontWeight: 'bold'
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
