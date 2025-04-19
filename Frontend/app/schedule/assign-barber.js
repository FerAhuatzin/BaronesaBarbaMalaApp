import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ScheduleFooter from "../../components/schedule/schedule-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
import { fontSizes } from "../../constants/font-sizes";
import AssignBarberBody from "../../components/schedule/assign-barber/assign-barber-body";

export default function BarberSelection() {
  return (
    <View style={styles.container}>
      <ScheduleHeader progress={60} totalSteps={5}/>
      <Text style={styles.title}>
        Selecciona quien hará tu servicio
      </Text>
      <AssignBarberBody />
      <ScheduleFooter next_screen="./assign-contact"  touchable_message="Siguiente"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: fontSizes.largeSubTitles,
    width: "90%",
    alignSelf: "center",
    marginVertical: 20,
  },
});