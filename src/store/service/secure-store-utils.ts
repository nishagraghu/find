import * as SecureStore from 'expo-secure-store';

export async function save(key: string, value: any) {
  try {
    const jsonValue = JSON.stringify(value);
    console.log(jsonValue);
    await SecureStore.setItemAsync(key, jsonValue);

    const jsonValue1 = await SecureStore.getItemAsync(key);
    console.log(jsonValue1);

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
