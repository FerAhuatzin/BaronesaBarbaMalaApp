import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ScheduleFooter from "../../components/schedule/schedule-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
import DateBody from "../../components/schedule/assign-date/date-body";
import { commonStyles } from "../../constants/commonStyles";

export default function DateSelection() {
  return (
    <View style={commonStyles.pageContainer}>
      <ScheduleHeader progress={40} totalSteps={5} />
      <Text style={commonStyles.sectionTitle}>Seleccionar la fecha de tu cita</Text>
      <DateBody />
      <ScheduleFooter
        next_screen="./assign-barber"
        touchable_message="Siguiente"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos específicos si se necesitan en el futuro
});
