import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { fontSizes } from "@/constants/font-sizes";
import FormInput from "@/components/forms/form-input";
import { useState, useEffect } from "react";
import { commonStyles } from "@/constants/commonStyles";
import { router } from "expo-router";
import { useAppointment } from "@/context/AppointmentContext";

export default function AssignContactBody() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { updateAppointmentData } = useAppointment();

  useEffect(() => {
    updateAppointmentData({
      clientName: fullName,
      email: email,
      phone: phone
    });
  }, [fullName, email, phone]);

  return (
    <ScrollView 
      style={[commonStyles.widthContainer, commonStyles.flex]}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      
      <FormInput
        label="Nombre completo"
        placeholder="Nombre completo"
        value={fullName}
        onChangeText={setFullName}
      />

      <FormInput
        label="Correo electrónico"
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <FormInput
        label="Teléfono"
        placeholder="Número de teléfono"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      {/*      <Text style={styles.text}>
            O gana puntos para pagar tus citas al iniciar sesión o registrarse.
          </Text>
          <TouchableOpacity style={[commonStyles.primaryButton, styles.buttonOverwrite]} onPress={() => router.push("/login")}>
            <Text style={commonStyles.buttonText}>Iniciar sesión o registrarse</Text>
          </TouchableOpacity>
          */}
     
       
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 10,
    fontSize: fontSizes.body,
    textAlign: "center",
    marginBottom: 20,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  buttonOverwrite: {
    marginTop: 0,
  }
});
