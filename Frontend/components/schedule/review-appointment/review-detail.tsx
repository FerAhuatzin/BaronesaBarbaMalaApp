import { View, Text, StyleSheet } from "react-native";
import { fontSizes } from "../../../constants/font-sizes";

interface ReviewDetailProps {
    label: string;
    value: string;
}

export default function ReviewDetail({ label, value }: ReviewDetailProps) {
    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>{label}</Text>
            <Text style={styles.detailValue}>{value}</Text>    
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    detailText: {
        fontSize: fontSizes.body,
    },
    detailValue: {
        fontSize: fontSizes.body,
        color: "gray",
    },
});