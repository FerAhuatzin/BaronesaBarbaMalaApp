import { View, Text, StyleSheet } from "react-native";
import { fontSizes } from "@/constants/font-sizes";
import FormInput from "@/components/forms/form-input";
import { useState } from "react";


export default function AssignContactBody() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Inicia sesión para omitir
        este paso y ganar puntos para pagar tus citas.
      </Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    flex: 1,
  },
  text: {
    fontSize: fontSizes.body,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
