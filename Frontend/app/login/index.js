import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { Stack } from "expo-router";
import GeneralHeaderTitle from "../../components/general-header-title";
import { fontSizes } from "../../constants/font-sizes";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "../../constants/Icons";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

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
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Correo electrónico</Text>
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Contraseña</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Contraseña"
                placeholderTextColor="#aaa"
                secureTextEntry={!showPassword}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOffIcon size={24} color="#777" />
                ) : (
                  <EyeIcon size={24} color="#777" />
                )}
              </Pressable>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            router.replace({
              pathname: "/(tabs)/profile",
              params: { logged: "true" },
            })
          }
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Iniciar sesión (demo)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/login/register")}
          style={styles.registerContainer}
        >
          <Text style={styles.registerText}>¿No tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
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
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: fontSizes.body,
    marginBottom: 8,
    fontWeight: "500",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    padding: 15,
    fontSize: fontSizes.body,
    height: 50,
    backgroundColor: "#fff",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    backgroundColor: "#fff",
    paddingRight: 15,
    height: 50,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: fontSizes.body,
    height: 50,
  },
  loginButton: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
    height: 50,
    justifyContent: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: fontSizes.body,
  },
  registerContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  registerText: {
    color: "#333",
    textDecorationLine: "underline",
    fontSize: fontSizes.body,
  },
  formContainer: {
    paddingBottom: 20,
  },
});
