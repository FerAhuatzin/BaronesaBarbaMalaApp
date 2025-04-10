import { Tabs } from "expo-router";
import { CalendarIcon, AppointmentIcon, ShopIcon, ProfileIcon } from "../../constants/Icons";
import { colors } from "../../constants/colors";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colors.tab_highlight, tabBarStyle: { height: 50 }, headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Reservar",
          tabBarIcon: ({ color }) => <CalendarIcon size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="my-appointments"
        options={{
          title: "Mis citas",
          tabBarIcon: ({ color }) => <AppointmentIcon size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: "Tienda",
          tabBarIcon: ({ color }) => <ShopIcon size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <ProfileIcon size={26} color={color} />,
        }}
      />
    </Tabs>
  );
}
