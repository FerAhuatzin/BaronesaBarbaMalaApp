import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ScheduleFooter from "../../components/schedule/schedule-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
import ReviewBody from "../../components/schedule/review-appointment/review-body";
import { fontSizes } from "../../constants/font-sizes";

export default function ReviewAppointment() {
  return (
    <View style={styles.container}>
      <ScheduleHeader progress={100} totalSteps={5}/>
      <Text style={styles.title}>
        Confirma que todo se vea bien
      </Text>
      <ReviewBody/>
      <ScheduleFooter next_screen="./appointment-confirmation" touchable_message="Reservar"/>
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
