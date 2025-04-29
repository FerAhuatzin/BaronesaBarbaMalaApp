import { fontSizes } from "@/constants/font-sizes";
import { View, Text, StyleSheet } from "react-native";
import ReviewDetail from "./review-detail";
import { useAppointment } from "@/context/AppointmentContext";

export default function ReviewBody() {
    const { appointmentData } = useAppointment();

    return (
        <View style={styles.container}>
            <ReviewDetail label="Sucursal" value={appointmentData.branch} />
            <ReviewDetail label="Servicio" value={appointmentData.service} />
            <ReviewDetail label="Barbero" value={appointmentData.barber} />
            <ReviewDetail label="Cliente" value={appointmentData.clientName} />
            <ReviewDetail label="Fecha" value={appointmentData.date} />
            <ReviewDetail label="Hora" value={appointmentData.time} />
            <ReviewDetail label="Correo" value={appointmentData.email} />
            <ReviewDetail label="Teléfono" value={appointmentData.phone} />
            <ReviewDetail label="Total" value={`$${appointmentData.total}`} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
    },
    text: {
        fontSize: fontSizes.body,
        marginBottom: 20,
    },
});
