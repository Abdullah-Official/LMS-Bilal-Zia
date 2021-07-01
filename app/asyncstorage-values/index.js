import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAsyncStorageValues = async () => {
  const token = await AsyncStorage.getItem('@token');
  const user = await AsyncStorage.getItem('@user');
//   const City = await AsyncStorage.getItem('@City');
//   const manager_details = await AsyncStorage.getItem('@manager_details');
//   const userInformation = await AsyncStorage.getItem('@userInfo');
//   const userInfo = JSON.parse(userInformation);
//   const manager = JSON.parse(manager_details);
  return {
    // location: location || JSON.stringify({ lat: 48.864716, log: 2.349014 }),
    // userInfo: userInfo,
    // Currency: Currency,
    // City: JSON.parse(City) || {},
    // manager_details: manager || {},
    user: JSON.parse(user),
    token: token || JSON.stringify(token)
  };
};
// console.log(getAsyncStorageValues())