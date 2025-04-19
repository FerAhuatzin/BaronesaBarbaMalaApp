import { View } from "react-native";
import { StyleSheet } from "react-native";
import DateCalendar from "./date-calendar";
import DateAvailableHours from "./date-available-hours";
import React, { useState, useEffect } from "react";

interface TimeSlot {
  time: string;
  available: boolean;
}

export default function DateBody() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableHours, setAvailableHours] = useState<TimeSlot[]>([]);

  // Mock de horas ocupadas - Esto se reemplazaría con datos reales
  const busyHours: Record<string, string[]> = {
    '2025-05-01': ['11:00', '12:15', '15:30'],
    '2025-05-02': ['10:30', '13:45', '14:00'],
  };

  // Calcular horarios disponibles cuando cambia la fecha
  useEffect(() => {
    calculateAvailableHours(selectedDate);
  }, [selectedDate]);

  const calculateAvailableHours = (date: Date) => {
    // Crear objeto Date para hoy a las 12 del mediodía para evitar problemas con zonas horarias
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    
    // Crear copia de la fecha seleccionada al mediodía
    const dateToCompare = new Date(date);
    dateToCompare.setHours(12, 0, 0, 0);
    
    // Formatear fechas sin horas para comparaciones y búsqueda en busyHours
    const todayFormatted = formatDateToYYYYMMDD(today);
    const selectedDateFormatted = formatDateToYYYYMMDD(dateToCompare);
    
    // Verificar si la fecha seleccionada es hoy comparando solo año, mes y día
    const isToday = todayFormatted === selectedDateFormatted;
    // Configuración de horarios
    const allTimeSlots: TimeSlot[] = [];
    const startHour = 10;
    const startMinute = 30;
    const endHour = 19;
    const endMinute = 0;
    
    let currentHour = startHour;
    let currentMinute = startMinute;
    
    // Ajustar la hora de inicio si es hoy
    if (isToday) {
      const now = new Date();
      const roundedMinutes = Math.ceil(now.getMinutes() / 15) * 15;
      
      if (now.getHours() > endHour || (now.getHours() === endHour && now.getMinutes() > 0)) {
        setAvailableHours([]);
        return;
      }
      
      // Si la hora actual es después de la apertura, usar la hora actual redondeada
      if (now.getHours() > startHour || (now.getHours() === startHour && now.getMinutes() >= startMinute)) {
        currentHour = now.getHours();
        currentMinute = roundedMinutes === 60 ? 0 : roundedMinutes;
        
        // Si redondeamos a la siguiente hora
        if (roundedMinutes === 60) {
          currentHour += 1;
        }
      }
    }
    
    // Generar todas las horas posibles en intervalos de 15 minutos
    while (currentHour < endHour || (currentHour === endHour && currentMinute <= endMinute)) {
      const timeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
      
      // Verificar si está en las horas ocupadas
      const isAvailable = !(busyHours[selectedDateFormatted]?.includes(timeString) || false);
      
      allTimeSlots.push({
        time: timeString,
        available: isAvailable
      });
      
      // Avanzar 15 minutos
      currentMinute += 15;
      if (currentMinute >= 60) {
        currentHour += 1;
        currentMinute = 0;
      }
    }
    
    setAvailableHours(allTimeSlots);
  };

  // Función para formatear fecha a YYYY-MM-DD independiente de zona horaria
  const formatDateToYYYYMMDD = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <View style={styles.container}>
      <DateCalendar 
        selectedDate={selectedDate} 
        onSelectDate={(date) => {
          setSelectedDate(date);
        }} 
      />
      <DateAvailableHours 
        availableHours={availableHours}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  }
});