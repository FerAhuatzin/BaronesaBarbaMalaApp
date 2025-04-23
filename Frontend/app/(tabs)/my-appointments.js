import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from 'react';
import NextAppointment from "../../components/my-appointments/next-appointment";
import PastAppointment from "../../components/my-appointments/past-appointment";
import { StyleSheet } from "react-native";
import { fontSizes } from "../../constants/font-sizes";
import TabsHeader from "../../components/tabs-header";
import { Stack, useRouter } from "expo-router";
import { mockAppointments } from "../../components/my-appointments/mock-data";
import { commonStyles } from "../../constants/commonStyles";

export default function MyAppointments() {
  const router = useRouter();
  const upcomingAppointments = mockAppointments.filter(app => app.status === 'pending');
  const pastAppointments = mockAppointments.filter(app => app.status === 'completed' || app.status === 'cancelled');
  
  return (
    <View style={commonStyles.pageContainer}>
      <Stack.Screen options={{ header: () => <TabsHeader title="Mis citas" /> }} />
      
      <ScrollView style={commonStyles.scrollContainer} showsVerticalScrollIndicator={false}>
        {mockAppointments.length > 0 ? (
          <>
            <Text style={commonStyles.subtitle}>Próximas</Text>
            
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map(appointment => (
                <NextAppointment key={appointment.id} appointment={appointment} />
              ))
            ) : (
              <Text style={styles.noAppointmentsText}>No tienes citas próximas</Text>
            )}
            
            <Text style={commonStyles.subtitle}>Pasadas</Text>
            
            {pastAppointments.length > 0 ? (
              pastAppointments.map(appointment => (
                <PastAppointment key={appointment.id} appointment={appointment} />
              ))
            ) : (
              <Text style={styles.noAppointmentsText}>No tienes citas pasadas</Text>
            )}
          </>
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.noAppointmentsText0}>Ups, parece que no has reservado ninguna cita</Text>
            <TouchableOpacity 
              style={styles.bookButton} 
              onPress={() => router.push("/(tabs)/")}
            >
              <Text style={styles.bookButtonText}>Agenda una cita</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  noAppointmentsText0: {
    fontSize: fontSizes.subTitles,
  },
  noAppointmentsText: {
    width: "90%",
    alignSelf: "center",
    fontSize: fontSizes.body,
    color: "#666",
  },
  emptyContainer: {
    width: "90%",
    alignSelf: "center",
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
  },
  bookButton: {
    backgroundColor: 'black',
    width: "100%",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 15,
  },
  bookButtonText: {
    color: 'white',
    fontSize: fontSizes.body,
  }
});