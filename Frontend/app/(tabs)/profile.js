import React, { useState } from "react";
import { View } from "react-native";
import ProfileNotLoggedIn from "../../components/profile/profile-not-logged";
import ProfileLoggedIn from "../../components/profile/profile-logged-in";
import { useLocalSearchParams } from "expo-router";
import TabsHeader from "../../components/tabs-header";
import { Stack } from "expo-router";

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { logged } = useLocalSearchParams();
  React.useEffect(() => {
    if (logged === "true") {
      setIsLoggedIn(true);
    }
  }, [logged]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Screen options={{ header: () => <TabsHeader title="Perfil" /> }} />
      {isLoggedIn ? (
        <ProfileLoggedIn handleLogout={() => setIsLoggedIn(false)} />
      ) : (
        <ProfileNotLoggedIn />
      )}
    </View>
  );
}
