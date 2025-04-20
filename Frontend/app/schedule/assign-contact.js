import { View, Text } from "react-native";
import React from "react";
import ScheduleFooter from "../../components/schedule/schedule-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
import AssignContactBody from "../../components/schedule/assign-contact/assign-contact-body";
import { StyleSheet } from "react-native";
import { commonStyles } from "../../constants/commonStyles";

export default function ContactAssignment() {
  return (
    <View style={commonStyles.pageContainer}>
      <ScheduleHeader progress={80} totalSteps={5}/>
      <Text style={commonStyles.sectionTitle}>
        Pon tus datos de contacto
      </Text>
      <AssignContactBody />
      <ScheduleFooter next_screen="./review-appointment"  touchable_message="Siguiente"/>
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos específicos si se necesitan en el futuro
}); 