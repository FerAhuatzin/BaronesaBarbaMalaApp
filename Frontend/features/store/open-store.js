import { Linking } from "react-native";

export const openStore = () => {
  const url = `https://barberiabarbamala.com/shop/`;
  Linking.openURL(url);
};