import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import ScheduleFooter from "../../components/schedule/schedule-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
import { fontSizes } from "../../constants/font-sizes";
import DateBody from "../../components/schedule/assign-date/date-body";

export default function DateSelection() {
  return (
    <View style={styles.container}>
      <ScheduleHeader progress={40} totalSteps={5} />
      <Text style={styles.title}>Seleccionar la fecha de tu cita</Text>
      <ScrollView>
        <DateBody />
      </ScrollView>

      <ScheduleFooter
        next_screen="./assign-barber"
        touchable_message="Siguiente"
      />
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
