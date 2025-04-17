import { View, Text, TouchableOpacity, ImageBackground, SafeAreaView, Image } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { fontSizes } from "../constants/font-sizes";
import { Stack } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground 
        source={require('../assets/images/SplashImage.jpg')} 
        style={styles.container}
      >
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.title}>
            Los que saben como tratar tu cabello
          </Text>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/images/Barbamala-logo-white.png')} style={styles.logo} />
            <Image source={require('../assets/images/Baronesa-logo-white.png')} style={styles.logo} />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => router.replace("/(tabs)")}>
            <Text style={styles.buttonText}>Iniciar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.8
  },
  title: {
    fontSize: fontSizes.titles,
    fontWeight: "bold",
    margin: 20,
    color: "white",
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.barba_mala,
    width: "80%",
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: fontSizes.subTitles,
    color: "black",
    textAlign: "center",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    width: "80%",
    height: 70,
    alignSelf: "center",
  },
  logo: {
    height: "100%",
    width: "48%",
    resizeMode: "contain",
  },
});