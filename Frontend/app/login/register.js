import { useRouter } from "expo-router";
import {
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Stack } from "expo-router";
import GeneralHeaderTitle from "../../components/general-header-title";
import { useState } from "react";
import FormInput from "../../components/forms/form-input";
import PasswordInput from "../../components/forms/password-input";
import FormButton from "../../components/forms/form-button";

export default function Register() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    router.replace({
      pathname: "/(tabs)/profile",
      params: { logged: "true" },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <GeneralHeaderTitle title="Registrarse" />,
        }}
      />

      <View style={styles.container}>
        <View style={styles.formContainer}>
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

          <PasswordInput
            label="Contraseña"
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <FormButton 
          title="Registrarse" 
          onPress={handleRegister}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    paddingVertical: 20,
    width: "90%",
    alignSelf: "center",
  },
  formContainer: {
    paddingBottom: 20,
  },
});
