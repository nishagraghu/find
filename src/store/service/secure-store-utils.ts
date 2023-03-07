import * as SecureStore from 'expo-secure-store';

export async function save(key: string, value: any) {
  try {
    const jsonValue = JSON.stringify(value);
      
    await SecureStore.setItemAsync(key, jsonValue);
  ;
  
  } catch (error) {
    console.error(`Error saving ${key}: ${error}`);
  }
}

export async function getValueFor(key: string) {
  try {
    const jsonValue = await SecureStore.getItemAsync(key);
    if (jsonValue !== null) {
      const value = JSON.parse(jsonValue);
      return value;
    } else {
      return null;;
    }
  } catch (error) {
    console.error(`Error getting ${key}: ${error}`);
  }
}
