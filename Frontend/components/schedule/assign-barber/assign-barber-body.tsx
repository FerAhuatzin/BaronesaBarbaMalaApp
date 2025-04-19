import { Barber } from "@/types/barber";
import { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { BarberMockData } from "./mock-data";
import BarberInfo from "./barber-info";

export default function AssignBarberBody() {
    const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
    const [barbers, setBarbers] = useState<Barber[]>([]);

    useEffect(() => {
        //TODO: get barbers from backend
        const anyBarber: Barber = {
            id: 0,
            name: "Cualquier barbero disponible",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfD2JEoJoRDVSAnoZninUWEc0j0V64gVnKWw&s",
            description: "Selecciona esta opción para el primer barbero disponible",
            rating: 5.0
        };
        
        const barberList = [anyBarber, ...BarberMockData];
        setBarbers(barberList);

    }, []);

    const handleBarberSelection = (barber: Barber) => {
        setSelectedBarber(barber);
    }

    const renderBarberItem = ({ item }: { item: Barber }) => {
        const isSelected = selectedBarber?.id === item.id;
        return (
            <BarberInfo 
                barber={item} 
                isSelected={isSelected} 
                onSelect={handleBarberSelection} 
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={barbers}
                renderItem={renderBarberItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
    },
    listContainer: {
        paddingBottom: 20,
    }
});
