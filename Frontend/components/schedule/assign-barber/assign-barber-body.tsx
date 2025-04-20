import { Barber } from "@/types/barber";
import { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { BarberMockData } from "./mock-data";
import BarberInfo from "./barber-info";
import { commonStyles } from "../../../constants/commonStyles";

export default function AssignBarberBody() {
    const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
    const [barbers, setBarbers] = useState<Barber[]>([]);

    useEffect(() => {
        //TODO: get barbers from backend
        const anyBarber: Barber = {
            id: 0,
            name: "Cualquiera",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfD2JEoJoRDVSAnoZninUWEc0j0V64gVnKWw&s",
            description: "Se asignará automáticamente.",
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
        <View style={[commonStyles.widthContainer, commonStyles.flex]}>
            <FlatList
                data={barbers}
                renderItem={renderBarberItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={commonStyles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    // Styles removed and replaced with commonStyles
});
