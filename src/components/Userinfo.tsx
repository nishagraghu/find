import { View, Text, StyleSheet } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


export const UserInfo: React.FC = () => {
    return (
        <View>
            <List.Subheader style={styles.text}>
                <Ionicons name="call-outline" size={24} /> &nbsp;&nbsp; 8867460746
            </List.Subheader>
            <List.Subheader style={styles.text}>
                <Ionicons name="mail-outline" size={24} /> &nbsp;&nbsp; nishag619@gmail.com
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