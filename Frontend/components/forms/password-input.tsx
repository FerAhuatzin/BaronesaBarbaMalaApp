import React, { useState } from 'react';
import { Pressable } from "react-native";
import { EyeIcon, EyeOffIcon } from "../../constants/Icons";
import FormInput from './form-input';

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function PasswordInput({
  label,
  placeholder,
  value,
  onChangeText,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const passwordVisibilityIcon = (
    <Pressable onPress={togglePasswordVisibility}>
      {showPassword ? (
        <EyeOffIcon size={24} color="#777" />
      ) : (
        <EyeIcon size={24} color="#777" />
      )}
    </Pressable>
  );

  return (
    <FormInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={!showPassword}
      rightComponent={passwordVisibilityIcon}
    />
  );
} 