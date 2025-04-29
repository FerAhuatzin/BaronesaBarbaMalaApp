import { Barber } from "@/types/barber";
import { useState, useEffect, useCallback } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { BarberMockData } from "./mock-data";
import BarberInfo from "./barber-info";
import { commonStyles } from "../../../constants/commonStyles";
import { useAppointment } from "@/context/AppointmentContext";

export default function AssignBarberBody() {
    const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
    const [barbers, setBarbers] = useState<Barber[]>([]);
    const { updateAppointmentData, appointmentData } = useAppointment();

    useEffect(() => {
        //TODO: get barbers from backend
        const anyBarber: Barber = {
            id: 1,
            name: "Cualquiera",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfD2JEoJoRDVSAnoZninUWEc0j0V64gVnKWw&s",
            description: "Se asignará automáticamente.",
            rating: 5.0
        };
        
        const barberList = [anyBarber, ...BarberMockData];
        setBarbers(barberList);

        // Reiniciar el barbero seleccionado si el contexto se ha reiniciado
        if (!appointmentData.barberId) {
            setSelectedBarber(null);
        }
    }, [appointmentData.barberId]);

    const handleBarberSelection = useCallback((barber: Barber) => {
        setSelectedBarber(barber);
        updateAppointmentData({
            barberId: barber.id,
            barber: barber.name
        });
    }, [updateAppointmentData]);

    const renderBarberItem = useCallback(({ item }: { item: Barber }) => {
        const isSelected = selectedBarber?.id === item.id;
        return (
            <BarberInfo 
                barber={item} 
                isSelected={isSelected} 
                onSelect={handleBarberSelection} 
            />
        );
    }, [selectedBarber, handleBarberSelection]);

    return (
        <View style={[commonStyles.widthContainer, commonStyles.flex]}>
            <FlatList
                data={barbers}
                renderItem={renderBarberItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={commonStyles.listContainer}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={true}
                maxToRenderPerBatch={5}
                windowSize={5}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    // Styles removed and replaced with commonStyles
});
