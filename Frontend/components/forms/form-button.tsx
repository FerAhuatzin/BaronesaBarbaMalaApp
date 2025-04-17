import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { fontSizes } from "../../constants/font-sizes";

interface FormButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  style?: object;
}

export default function FormButton({
  title,
  onPress,
  variant = 'primary',
  style
}: FormButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button, 
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
        style
      ]}
    >
      <Text 
        style={[
          styles.buttonText, 
          variant === 'primary' ? styles.primaryButtonText : styles.secondaryButtonText
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
    height: 50,
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "black",
  },
  secondaryButton: {
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: fontSizes.body,
  },
  primaryButtonText: {
    color: "white",
  },
  secondaryButtonText: {
    color: "#333",
    textDecorationLine: "underline",
  },
}); 