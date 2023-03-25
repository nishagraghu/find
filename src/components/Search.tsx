
import { StyleSheet, Text, View, TouchableOpacity ,ScrollView } from 'react-native';
import React from 'react';
import { TextInput, Button, Divider, Text as Ptext, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { showMessage, hideMessage } from "react-native-flash-message";


import { RootState, useAppDispatch } from '../store/store';
interface Search {
    lable: string;
   
   
  }

const selectval =(filterInfo: any,key:string) =>{

     switch (key) {
        case 'Manufacturer':
          return filterInfo.selectedbroand.value;
        case 'Model':
          return filterInfo.selectedModel.value;
        case 'Year Range':
          return filterInfo.selectedyearofmake.value;
        
        case 'Variant':
          return filterInfo.selectedvariant.value;
        
        default:
          return 'NA';
          break;
      }
}

export default function Search({lable}:Search) {
    
    
    const navigation = useNavigation<any>();
    const filterInfo = useSelector((state: RootState) => state.filterInfo);
    const  value   = selectval(filterInfo,lable);
    const selectFilter = () =>{
     
         if(lable=='Model'){
            if(filterInfo.selectedbroand.value.length >2)
            {
                navigation.navigate('filter',{
                    filter: lable,
                    'filtervalue': filterInfo.selectedbroand
                })

            }else{
                showMessage({
                    message: "plese select Manufacturer",
                    type: "danger",
                  });
            }
         } else if(lable=='Manufacturer'){
            
              navigation.navigate('filter',{
                    filter: lable,
                    'filtervalue': filterInfo.selectedbroand
                })
            


         }else if(lable=='Year Range'){
            if(filterInfo.selectedModel.value.length>1){
                navigation.navigate('filter',{
                    filter: lable,
                    'filtervalue': filterInfo.selectedModel
                })
            }else {
                showMessage({
                    message: "Plese select Model",
                    type: "danger",
                  });
            }
           
            
         }else if(lable=='Variant'){

            if(filterInfo.selectedyearofmake.value.length>1){
            navigation.navigate('filter',{
                filter: lable,
                'filtervalue': filterInfo.selectedyearofmake
            })
        } else{
            showMessage({
                message: "Plese select Year Range",
                type: "danger",
              });
        }
         }
    }  

    return (

        <View >
            <TouchableOpacity onPress={selectFilter} >
                <TextInput
                    mode="outlined"
                    label={'Select '+lable}
                    placeholder={'Select '+lable}
                    style={styles.textinput}
                    contentStyle={styles.contenttext}
                     value={value}
                   
                    editable={false}

                />

            </TouchableOpacity>


        </View>

    );
}

const styles = StyleSheet.create({
    col8: {
        paddingLeft: 10,
        flex: 0.75
    },
    col4: {
        flex: 0.25,
    },
    displayAddres: {
        flex: 0.3,
        flexDirection: 'row',
    },
    Addres: {
        marginHorizontal: 20,
        marginVertical: 10,
        // marginLeft: 10,
        fontWeight: 'bold'
    },
    contenttext: {

    },
    textinput: {
        width: '90%',
        // alignItems:'center',
        marginLeft: 10,
        // marginTop:10,
        //  marginHorizontal:50,
        marginVertical: 10

    },
    formcontainer: {

        alignItems: 'center'
    },
    container: {
        flex: 1,
        paddingTop: '5%',
        backgroundColor: 'white'

    },
});
