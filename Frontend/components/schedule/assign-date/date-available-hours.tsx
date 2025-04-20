import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { fontSizes } from "../../../constants/font-sizes";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface DateAvailableHoursProps {
  availableHours: TimeSlot[];
}

export default function DateAvailableHours({ availableHours }: DateAvailableHoursProps) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const groupedHours = React.useMemo(() => {
    const morning: TimeSlot[] = [];
    const afternoon: TimeSlot[] = [];
    const evening: TimeSlot[] = [];

    availableHours.forEach(slot => {
      const hour = parseInt(slot.time.split(':')[0]);
      if (hour < 12) {
        morning.push(slot);
      } else if (hour < 17) {
        afternoon.push(slot);
      } else {
        evening.push(slot);
      }
    });

    return {
      morning,
      afternoon,
      evening
    };
  }, [availableHours]);

  const renderTimeSlot = ({ item }: { item: TimeSlot }) => {
    const isSelected = selectedTime === item.time;

    if (!item.available) {
      return null; 
    }

    return (
      <TouchableOpacity
        style={[styles.timeSlot, isSelected && styles.selectedTimeSlot]}
        onPress={() => setSelectedTime(item.time)}
      >
        <Text style={[styles.timeText]}>
          {item.time}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderTimeSection = (title: string, slots: TimeSlot[]) => {
    const availableSlots = slots.filter(slot => slot.available);
    
    if (availableSlots.length === 0) {
      return null;
    }

    return (
      <View style={styles.timeSection}>
        <Text style={styles.timeSectionTitle}>{title}</Text>
        <View style={styles.timeGrid}>
          {availableSlots.map((slot) => (
            <TouchableOpacity
              key={slot.time}
              style={[
                styles.timeSlot, 
                selectedTime === slot.time && styles.selectedTimeSlot
              ]}
              onPress={() => setSelectedTime(slot.time)}
            >
              <Text 
                style={[
                  styles.timeText,
                  selectedTime === slot.time && styles.selectedTimeText
                ]}
              >
                {slot.time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Horarios disponibles</Text>
      
      <View style={styles.content}>
        {availableHours.length === 0 ? (
          <Text style={styles.noHoursText}>
            No hay horarios disponibles para este día
          </Text>
        ) : (
          <>
            {renderTimeSection('Mañana', groupedHours.morning)}
            {renderTimeSection('Tarde', groupedHours.afternoon)}
            {renderTimeSection('Noche', groupedHours.evening)}
          </>
        )}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  title: {
    fontSize: fontSizes.subTitles,
    marginBottom: 15,
  },
  content: {
    flex: 1,
  },
  timeSection: {
    marginBottom: 20,
  },
  timeSectionTitle: {
    fontSize: fontSizes.body,
    marginBottom: 10,

  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timeSlot: {

    padding: 12,
    borderRadius: 15,
    margin: 4,
    minWidth: 70,
    alignItems: 'center',
  },
  timeText: {
    fontSize: fontSizes.body,
    color: "gray",
  },
  selectedTimeSlot: {
    backgroundColor: '#e0e0e0',
  },
  selectedTimeText: {
    color: "black",
  },
  noHoursText: {
    fontSize: fontSizes.body,
    color: '#666666',
    textAlign: 'center',
    marginTop: 20,
  },
  selectedTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  selectedTimeLabel: {
    fontSize: fontSizes.body,
    marginRight: 5,
    color: '#444444',
  },
  selectedTimeValue: {
    fontSize: fontSizes.body,
    color: '#333333',
  },
});
