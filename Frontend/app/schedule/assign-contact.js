import { View, Text } from "react-native";
import React from "react";
import ScheduleFooter from "../../components/schedule/schedule-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
import AssignContactBody from "../../components/schedule/assign-contact/assign-contact-body";
import { fontSizes } from "../../constants/font-sizes";
import { StyleSheet } from "react-native";

export default function ContactAssignment() {
  return (
    <View style={styles.container}>
      <ScheduleHeader progress={80} totalSteps={5}/>
      <Text style={styles.title}>
        Pon tus datos de contacto
      </Text>
      <AssignContactBody />
      <ScheduleFooter next_screen="./review-appointment"  touchable_message="Siguiente"/>
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
    marginTop: 20,
    marginBottom: 10,
  },
}); 