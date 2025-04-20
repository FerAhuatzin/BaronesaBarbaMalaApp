import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ScheduleFooter from "../../components/schedule/schedule-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
import { fontSizes } from "../../constants/font-sizes";
import AssignBarberBody from "../../components/schedule/assign-barber/assign-barber-body";
import { commonStyles } from "../../constants/commonStyles";

export default function BarberSelection() {
  return (
    <View style={commonStyles.pageContainer}>
      <ScheduleHeader progress={60} totalSteps={5}/>
      <Text style={commonStyles.sectionTitle}>
        Selecciona quien hará tu servicio
      </Text>
      <AssignBarberBody />
      <ScheduleFooter next_screen="./assign-contact"  touchable_message="Siguiente"/>
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos específicos si se necesitan en el futuro
});