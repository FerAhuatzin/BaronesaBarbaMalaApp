import { View, StyleSheet } from "react-native";
import React from "react";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { fontSizes } from "../../../constants/font-sizes";

interface DateCalendarProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

interface CalendarDayObject {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

// Configurar el idioma español
LocaleConfig.locales['es'] = {
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
  today: 'Hoy'
};
LocaleConfig.defaultLocale = 'es';

export default function DateCalendar({ selectedDate, onSelectDate }: DateCalendarProps) {
  // Función para formatear fecha a YYYY-MM-DD independiente de zona horaria
  const formatDateToYYYYMMDD = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Obtener el día de hoy y formatearlo correctamente
  const today = new Date();
  const minDate = formatDateToYYYYMMDD(today);
  
  // Formatear la fecha seleccionada para el marcado
  const selectedDateFormatted = formatDateToYYYYMMDD(selectedDate);
  
  const markedDates = {
    [selectedDateFormatted]: {
      selected: true,
      disableTouchEvent: false,
      selectedColor: '#333333',
    }
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={selectedDateFormatted}
        minDate={minDate}
        onDayPress={(day: CalendarDayObject) => {
          // Crear nueva fecha con la zona horaria local
          const year = day.year;
          const month = day.month - 1; // En JavaScript los meses van de 0-11
          const dayOfMonth = day.day;
          
          const newDate = new Date(year, month, dayOfMonth, 12, 0, 0);
          onSelectDate(newDate);
        }}
        markedDates={markedDates}
        enableSwipeMonths={true}
        hideExtraDays={false}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#f9f9f9',
          textSectionTitleColor: '#707070',
          selectedDayBackgroundColor: '#333333',
          selectedDayTextColor: '#ffffff',
          todayTextColor: 'black',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#555555',
          selectedDotColor: '#ffffff',
          arrowColor: '#444444',
          monthTextColor: '#333333',
          indicatorColor: '#555555',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: fontSizes.body,
          textMonthFontSize: fontSizes.subTitles,
          textDayHeaderFontSize: fontSizes.captions
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 15,
  }
});