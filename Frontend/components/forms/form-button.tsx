import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { commonStyles } from "../../constants/commonStyles";

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
        commonStyles.button, 
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
        style
      ]}
    >
      <Text 
        style={[
          commonStyles.buttonText, 
          variant === 'primary' ? styles.primaryButtonText : styles.secondaryButtonText
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "black",
  },
  secondaryButton: {
    backgroundColor: "transparent",
  },
  primaryButtonText: {
    color: "white",
  },
  secondaryButtonText: {
    color: "#333",
    textDecorationLine: "underline",
  },
}); 