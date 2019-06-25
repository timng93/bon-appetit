// TODO: Add model functions to handle AsyncStorage
// TODO: Set up basic login with fixed credentials

import AsyncStorage from '@react-native-community/async-storage';

export const getLoggedInUser = async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    const userId = await AsyncStorage.getItem("userId");
    if (!token || !userId) throw "Authentication error.";
    return userId;
  } catch (e) {
    console.log(e);
  }
};

export const clearUserToken = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};

export const setUserToken = async (id, token) => {
  try {
    await AsyncStorage.setItem("userToken", token);
    await AsyncStorage.setItem("userId", id);
  } catch (e) {
    console.log(e);
  }
};
