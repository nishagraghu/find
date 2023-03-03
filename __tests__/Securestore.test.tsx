import { getValueFor,save } from '../src/store/service/secure-store-utils';
import * as SecureStore from 'expo-secure-store';

describe('secure-store-utils', () => {
    beforeEach(() => {
      // Clear any stored values before each test
      SecureStore.deleteItemAsync('testKey');
    });
  
    describe('save', () => {
      it('should save a value', async () => {
        await save('testKey', 'testValue');
        const storedValue = await SecureStore.getItemAsync('testKey');
        expect(storedValue).toBeDefined();
        expect(storedValue).toBe(JSON.stringify('testValue'));
      });
  
    //   it('should handle errors', async () => {
    //     // Pass an invalid value to trigger an error
    //     const invalidValue = { foo: 'bar' };
    //     const key = 'testKey';
    //     await expect(save(key, invalidValue)).rejects.toThrow();
    //     const storedValue = await SecureStore.getItemAsync(key);
    //     expect(storedValue).toBeNull();
    //   });
    // });
  
    // describe('getValueFor', () => {
    //   it('should retrieve a stored value', async () => {
    //     await SecureStore.setItemAsync('testKey', JSON.stringify('testValue'));
    //     const retrievedValue = await getValueFor('testKey');
    //     expect(retrievedValue).toBeDefined();
    //     expect(retrievedValue).toBe('testValue');
    //   });
  
    //   it('should return null if key not found', async () => {
    //     const retrievedValue = await getValueFor('testKey');
    //     console.log(retrievedValue);
    //     expect(retrievedValue).toBeNull();
    //   });
  
    //   it('should handle errors', async () => {
    //     // Pass an invalid key to trigger an error
    //     const invalidKey = "foo1";
       
    //     await  expect(getValueFor(invalidKey)).toBeUndefined();;
       
    //   });
     });
  });