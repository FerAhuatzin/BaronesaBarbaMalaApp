import { useRouter } from "expo-router";
import {
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Stack } from "expo-router";
import GeneralHeaderTitle from "../../components/general-header-title";
import { fontSizes } from "../../constants/font-sizes";
import { useState } from "react";
import FormInput from "../../components/forms/form-input";
import PasswordInput from "../../components/forms/password-input";
import FormButton from "../../components/forms/form-button";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.replace({
      pathname: "/(tabs)/profile",
      params: { logged: "true" },
    });
  };

  const handleRegister = () => {
    router.push("/login/register");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <GeneralHeaderTitle title="Iniciar sesión" />,
        }}
      />

      <View style={styles.container}>
        <View style={styles.formContainer}>
          <FormInput
            label="Correo electrónico"
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <PasswordInput
            label="Contraseña"
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        
        <FormButton 
          title="Iniciar sesión" 
          onPress={handleLogin}
        />

        <FormButton 
          title="¿No tienes cuenta? Regístrate" 
          onPress={handleRegister}
          variant="secondary"
          style={styles.registerContainer}
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
    justifyContent: "center",
  },
  formContainer: {
    paddingBottom: 20,
  },
  registerContainer: {
    marginTop: 10,
    marginBottom: 0,
  },
});
