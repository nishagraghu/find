import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
export const HeaderButtons = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.1 }} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>


            <View style={{ flex: 0.8 }} />  
            <View style={{ flex: 0.1 }} >
            <TouchableOpacity onPress={() => navigation.navigate('EditScreen')}>
                <Ionicons name="pencil-sharp" size={24} color="black" />
            </TouchableOpacity>
            </View>

        </View>
    );
}
