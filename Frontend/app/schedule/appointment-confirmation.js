import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AppointmentConfirmationFooter from "../../components/schedule/appointment-confirmation/appointment-confirmation-footer";
import { fontSizes } from "../../constants/font-sizes";
import GeneralHeader from "../../components/general-header";

export default function AppontmentConfirmation() {
  return (
    <View style={styles.container}>
      <GeneralHeader />
      <View style={styles.content}>
        <Text style={styles.title}>¡Gracias por reservar con Barba mala!</Text>
        <Text style={styles.text}>
          Se te envió un correo con los detalles de tu cita. Se recomienda llegar
          no más de 15 minutos de la hora de la cita para que se pueda respetar tu
          asiento. Recuerda que si tienes puntos en tu cuenta puedes utilizarlos
          para pagar tu servicio.
        </Text>
        <View style={styles.imageContainer}>
          <Image 
            source={require("../../assets/images/Barbamala-logo.png")} 
            style={styles.image} 
            resizeMode="contain"
          />
        </View>
      </View>
      <AppointmentConfirmationFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: fontSizes.largeSubTitles,
    marginVertical: 20,
    width: "90%",
    alignSelf: "center",
  },
  text: {
    fontSize: fontSizes.body,
    marginVertical: 20,
    width: "90%",
    alignSelf: "center",
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    width: "90%",
    alignSelf: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
});
