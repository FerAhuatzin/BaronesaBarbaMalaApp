import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import AssignServiceFooter from "../../components/schedule/assign-service/assign-service-footer";
import ScheduleHeader from "../../components/schedule/schedule-header";
import ServiceOptions from "../../components/schedule/assign-service/service-options";
import { commonStyles } from "../../constants/commonStyles";

export default function ServiceSelection() {
  const [totalCost, setTotalCost] = useState(0);

  const handleUpdateTotal = (newTotal) => {
    setTotalCost(newTotal);
  };

  return (
    <View style={commonStyles.pageContainer}>
      <ScheduleHeader progress={20} totalSteps={5}/>
      <Text style={commonStyles.sectionTitle}>
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
  serviceOptionsContainer: {
    flex: 1,
  },
});
