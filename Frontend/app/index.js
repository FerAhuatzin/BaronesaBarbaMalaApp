import { View, Text, TouchableOpacity, ImageBackground, SafeAreaView, Image, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import { fontSizes } from "../constants/font-sizes";
import { commonStyles } from "../constants/commonStyles";
import { Stack } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.fullScreenContainer}>
        <ImageBackground 
          source={require('../assets/images/SplashImage.jpg')} 
          style={styles.backgroundImage}
        >
          <View style={styles.overlay} />
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>
                Los que saben como tratar tu cabello
              </Text>
              <View style={styles.logoContainer}>
                <Image source={require('../assets/images/Barbamala-logo-white.png')} style={styles.logo} />
                <Image source={require('../assets/images/Baronesa-logo-white.png')} style={styles.logo} />
              </View>
              <TouchableOpacity style={[commonStyles.button, styles.splashButton]} onPress={() => router.replace("/(tabs)")}>
                <Text style={styles.buttonText}>Iniciar</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.8
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: fontSizes.titles,
    fontWeight: "bold",
    margin: 20,
    color: "white",
    textAlign: "center",
  },
  splashButton: {
    backgroundColor: colors.barba_mala,
    width: "80%",
    alignSelf: "center",
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