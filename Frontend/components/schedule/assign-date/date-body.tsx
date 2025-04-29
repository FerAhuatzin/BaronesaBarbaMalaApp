import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native";
import DateCalendar from "./date-calendar";
import DateAvailableHours from "./date-available-hours";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { commonStyles } from "../../../constants/commonStyles";
import { useAppointment } from "@/context/AppointmentContext";

interface TimeSlot {
  time: string;
  available: boolean;
}

export default function DateBody() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableHours, setAvailableHours] = useState<TimeSlot[]>([]);
  const { updateAppointmentData, appointmentData } = useAppointment();

  const busyHours = useMemo(() => ({
    '2025-05-01': ['11:00', '12:15', '15:30'],
    '2025-05-02': ['10:30', '13:45', '14:00'],
  } as Record<string, string[]>), []);

  const formatDateToYYYYMMDD = useCallback((date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }, []);

  const calculateAvailableHours = useCallback((date: Date) => {
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    
    const dateToCompare = new Date(date);
    dateToCompare.setHours(12, 0, 0, 0);
    
    const todayFormatted = formatDateToYYYYMMDD(today);
    const selectedDateFormatted = formatDateToYYYYMMDD(dateToCompare);
    
    const isToday = todayFormatted === selectedDateFormatted;
    const allTimeSlots: TimeSlot[] = [];
    const startHour = 10;
    const startMinute = 30;
    const endHour = 19;
    const endMinute = 0;
    
    let currentHour = startHour;
    let currentMinute = startMinute;
    
    if (isToday) {
      const now = new Date();
      const roundedMinutes = Math.ceil(now.getMinutes() / 15) * 15;
      
      if (now.getHours() > endHour || (now.getHours() === endHour && now.getMinutes() > 0)) {
        setAvailableHours([]);
        return;
      }
      
      if (now.getHours() > startHour || (now.getHours() === startHour && now.getMinutes() >= startMinute)) {
        currentHour = now.getHours();
        currentMinute = roundedMinutes === 60 ? 0 : roundedMinutes;
        
        if (roundedMinutes === 60) {
          currentHour += 1;
        }
      }
    }
    
    while (currentHour < endHour || (currentHour === endHour && currentMinute <= endMinute)) {
      const timeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
      
      const isAvailable = !(busyHours[selectedDateFormatted]?.includes(timeString) || false);
      
      allTimeSlots.push({
        time: timeString,
        available: isAvailable
      });
      
      currentMinute += 15;
      if (currentMinute >= 60) {
        currentHour += 1;
        currentMinute = 0;
      }
    }
    
    setAvailableHours(allTimeSlots);
  }, [busyHours, formatDateToYYYYMMDD]);

  useEffect(() => {
    calculateAvailableHours(selectedDate);
  }, [selectedDate, calculateAvailableHours]);

  useEffect(() => {
    if (!appointmentData.date) {
      setSelectedDate(new Date());
      setSelectedTime(null);
    }
  }, [appointmentData.date]);

  const handleDateSelection = useCallback((date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  }, []);

  const handleTimeSelection = useCallback((time: string) => {
    setSelectedTime(time);
    const formattedDate = formatDateToYYYYMMDD(selectedDate);
    updateAppointmentData({
      date: formattedDate,
      time: time
    });
  }, [selectedDate, updateAppointmentData, formatDateToYYYYMMDD]);

  const memoizedDateCalendar = useMemo(() => (
    <DateCalendar 
      selectedDate={selectedDate} 
      onSelectDate={handleDateSelection} 
    />
  ), [selectedDate, handleDateSelection]);

  const memoizedDateAvailableHours = useMemo(() => (
    <DateAvailableHours 
      availableHours={availableHours}
      selectedTime={selectedTime}
      onSelectTime={handleTimeSelection}
    />
  ), [availableHours, selectedTime, handleTimeSelection]);

  return (
    <ScrollView style={commonStyles.scrollContainer} showsVerticalScrollIndicator={false}>
      {memoizedDateCalendar}
      {memoizedDateAvailableHours}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  }
});