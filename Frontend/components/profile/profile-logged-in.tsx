import { Text, TouchableOpacity, View, ScrollView, Modal } from "react-native";
import { fontSizes } from "../../constants/font-sizes";
import { StyleSheet } from "react-native";
import CircleProgress from "./points";
import FormInput from "../forms/form-input";
import PasswordInput from "../forms/password-input";
import { useState } from "react";
import { commonStyles } from "../../constants/commonStyles";

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
        <Text style={commonStyles.subtitle}>
          Puntos: con cada cita atendida gana el 10% de su costo en puntos para
          pagar tus siguientes citas.
        </Text>
        <CircleProgress points={125} />
        
        <View style={[commonStyles.row, styles.sectionHeader]}>
          <Text style={commonStyles.subtitle}>Mis datos</Text>
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
        
        <TouchableOpacity onPress={handleEditProfile} style={commonStyles.primaryButton}>
          <Text style={commonStyles.buttonText}>Editar perfil</Text>
        </TouchableOpacity>
        
        <View style={commonStyles.divider} />
        
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
  sectionHeader: {
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: fontSizes.body,
    textDecorationLine: "underline",
    color: "black",
  },
  logoutButton: {
    paddingVertical: 10,
    alignItems: "center",
  },
});
