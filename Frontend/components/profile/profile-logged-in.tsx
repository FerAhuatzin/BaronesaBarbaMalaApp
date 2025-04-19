import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, ScrollView, Modal } from "react-native";
import { fontSizes } from "../../constants/font-sizes";
import { StyleSheet } from "react-native";
import CircleProgress from "./points";
import FormInput from "../forms/form-input";
import PasswordInput from "../forms/password-input";
import { useState } from "react";
import ChangeNotice from "../my-appointments/appointment-detail/change-notice";

interface ProfileLoggedInProps {
  handleLogout: () => void;
}

export default function ProfileLoggedIn({
  handleLogout,
}: ProfileLoggedInProps) {
  const [name, setName] = useState("Carmen López");
  const [email, setEmail] = useState("carmen@ejemplo.com");
  const [phone, setPhone] = useState("666555444");
  const [password, setPassword] = useState("********");

  
  // Función para mostrar el modal de confirmación
  const handleEditProfile = () => {
    //mandar a API para editar perfil
  };
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.subtitle}>
          Puntos: con cada cita atendida gana el 10% de su costo en puntos para
          pagar tus siguientes citas.
        </Text>
        <CircleProgress points={125} />
        
        <View style={styles.sectionHeader}>
          <Text style={styles.subtitle}>Mis datos</Text>
        </View>
        
        <FormInput 
          label="Nombre" 
          value={name} 
          onChangeText={setName} 
        />
        
        <FormInput 
          label="Correo electrónico" 
          value={email} 
          onChangeText={setEmail} 
        />
        
        <FormInput 
          label="Teléfono" 
          value={phone} 
          onChangeText={setPhone} 
        />
        
        <PasswordInput 
          label="Contraseña" 
          value={password} 
          onChangeText={setPassword} 
        />
        
        <TouchableOpacity onPress={handleEditProfile} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Editar perfil</Text>
        </TouchableOpacity>
        
        <View style={styles.divider} />
        
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.loginButtonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
      
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 30,
  },
  subtitle: {
    fontSize: fontSizes.subTitles,
    marginVertical: 10,
  },
  loginButtonText: {
    fontSize: fontSizes.body,
    textDecorationLine: "underline",
    color: "black",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "white",
    fontSize: fontSizes.body,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 20,
  },
  logoutButton: {
    paddingVertical: 10,
    alignItems: "center",
  },
});
