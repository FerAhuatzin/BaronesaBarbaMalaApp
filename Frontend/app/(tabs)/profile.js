import React, { useState } from "react";
import { View } from "react-native";
import ProfileNotLoggedIn from "../../components/profile/profile-not-logged";
import ProfileLoggedIn from "../../components/profile/profile-logged-in";
import { useLocalSearchParams } from "expo-router";
import TabsHeader from "../../components/tabs-header";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { commonStyles } from "../../constants/commonStyles";

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { logged } = useLocalSearchParams();
  React.useEffect(() => {
    if (logged === "true") {
      setIsLoggedIn(true);
    }
  }, [logged]);
  return (
    <View style={commonStyles.pageContainer}>
      <Stack.Screen options={{ header: () => <TabsHeader title="Perfil" /> }} />
      {isLoggedIn ? (
        <ProfileLoggedIn handleLogout={() => setIsLoggedIn(false)} />
      ) : (
        <ProfileNotLoggedIn />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos específicos si se necesitan en el futuro
});