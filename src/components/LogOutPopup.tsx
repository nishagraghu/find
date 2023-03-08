import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Dialog, Portal, Text ,Button } from 'react-native-paper';
import { RootState,useAppDispatch } from '../store/store';
import {setSignOut } from '../store/slices/authSlice';
import { useNavigation } from '@react-navigation/native';

interface Props {
    visible: boolean;
    setVisible: (visible: boolean) => void;
  }
  
const LogOutPopup : React.FC <Props>= ({visible,setVisible  }) => {
    const dispatch = useAppDispatch();
  
  const hideDialog = (): void => {
    setVisible(false);
   
  };

 const logout = (): void => {
    setVisible(false);
    dispatch(setSignOut());
    navigation.reset({
        index: 0,
        routes: [{ name: 'Start' }],
      });

  };
  const navigation = useNavigation<any>();
  
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        {/* <Dialog.Icon icon="alert" /> */}
        <Dialog.Content>
          <Text variant="bodyMedium">Do you want to exit ?</Text>
        </Dialog.Content>
       
        <Dialog.Actions>
          <Button
          
          onPress={() => {
            setVisible(false)
          }}>Cancel</Button>
          <Button onPress={() => logout()}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
})

export default LogOutPopup;