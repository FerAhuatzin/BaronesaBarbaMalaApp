import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ScheduleFooter from "../../components/schedule/schedule-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
import ReviewBody from "../../components/schedule/review-appointment/review-body";
import { fontSizes } from "../../constants/font-sizes";
import { commonStyles } from "../../constants/commonStyles";

export default function ReviewAppointment() {
  return (
    <View style={commonStyles.pageContainer}>
      <ScheduleHeader progress={100} totalSteps={5}/>
      <Text style={commonStyles.sectionTitle}>
        Confirma que todo se vea bien
      </Text>
      <ReviewBody/>
      <ScheduleFooter next_screen="./appointment-confirmation" touchable_message="Reservar"/>
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos específicos si se necesitan en el futuro
});
