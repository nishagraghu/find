import { View, Text, StyleSheet } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useStore, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';


export const UserInfo: React.FC = () => {
    const { jwt, phonnumber = '' , } = useSelector((state: RootState) => state.userAuth) || '';
    const { email } = useSelector((state: RootState) => state.userInfo) || '';
    
    return (
        <View>
            <List.Subheader style={styles.text}>
                <Ionicons name="call-outline" size={24} /> &nbsp;&nbsp;  {phonnumber}
            </List.Subheader>
            <List.Subheader style={styles.text}>
                <Ionicons name="mail-outline" size={24} /> &nbsp;&nbsp;  {email}
            </List.Subheader>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: 'gray'
    }
});
export default UserInfo;