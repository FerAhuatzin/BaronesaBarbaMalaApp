import { Barber } from "@/types/barber";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { fontSizes } from "@/constants/font-sizes";
import { commonStyles } from "@/constants/commonStyles";

interface BarberInfoProps {
  barber: Barber;
  isSelected: boolean;
  onSelect: (barber: Barber) => void;
}

export default function BarberInfo({ barber, isSelected, onSelect }: BarberInfoProps) {
  return (
    <TouchableOpacity 
      style={[styles.barberCard, isSelected && styles.selectedBarberCard]} 
      onPress={() => onSelect(barber)}
    >
      <Image source={{ uri: barber.image }} style={styles.barberImage} />
      <View style={styles.barberInfo}>
        <Text style={styles.barberName}>{barber.name}</Text>
        <Text style={commonStyles.captionText}>{barber.description}</Text>
        <View style={commonStyles.row}>
          <Text style={styles.ratingText}>{barber.rating}</Text>
          <Text style={styles.ratingStars}>{'★'.repeat(Math.floor(barber.rating))}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  barberCard: {
    flexDirection: 'row',
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedBarberCard: {
    backgroundColor: '#e0e0e0',

  },
  barberImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  barberInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  barberName: {
    fontSize: fontSizes.subTitles,
    marginBottom: 4,
  },
  ratingText: {
    fontSize: fontSizes.captions,
    marginRight: 4,
  },
  ratingStars: {
    fontSize: fontSizes.captions,
    color: '#FFD700',
  }
});
