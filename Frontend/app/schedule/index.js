import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import AssignServiceFooter from "../../components/schedule/assign-service/assign-service-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
import ServiceOptions from "../../components/schedule/assign-service/service-options";
import { fontSizes } from "../../constants/font-sizes";
export default function ServiceSelection() {
  const [totalCost, setTotalCost] = useState(0);

  const handleUpdateTotal = (newTotal) => {
    setTotalCost(newTotal);
  };

  return (
    <View style={styles.container}>
      <ScheduleHeader progress={20} totalSteps={5}/>
      <Text style={styles.title}>
        Selecciona tu servicio
      </Text>
      <View style={styles.serviceOptionsContainer}>
        <ServiceOptions onUpdateTotal={handleUpdateTotal} />
      </View>

        <AssignServiceFooter cost={totalCost}/>
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
  serviceOptionsContainer: {
    flex: 1,
  },
});
