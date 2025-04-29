import { Stack } from "expo-router";
import { AuthProvider } from "../context/auth-context";
import { AppointmentProvider } from "../context/AppointmentContext";

export default function Layout() {
  return (
    <AuthProvider>
      <AppointmentProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AppointmentProvider>
    </AuthProvider>
  );
}
