import React from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";
import { fontSizes } from "../../constants/font-sizes";

interface FormInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  rightComponent?: React.ReactNode;
}

export default function FormInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "sentences",
  rightComponent
}: FormInputProps) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      {rightComponent ? (
        <View style={styles.inputWithRightComponent}>
          <TextInput
            style={styles.componentInput}
            placeholder={placeholder || label}
            placeholderTextColor="#aaa"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
          />
          {rightComponent}
        </View>
      ) : (
        <TextInput
          style={styles.input}
          placeholder={placeholder || label}
          placeholderTextColor="#aaa"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
  inputWithRightComponent: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 15,
    backgroundColor: "#fff",
    paddingRight: 15,
    height: 50,
  },
  componentInput: {
    flex: 1,
    padding: 15,
    fontSize: fontSizes.body,
    height: 50,
  },
}); 