import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const AppointmentContext = createContext();

const initialAppointmentData = {
  // IDs
  branchId: '',
  serviceIds: [],
  barberId: '',
  clientId: '',
  // Datos mostrados
  branch: '',
  service: '',
  barber: '',
  clientName: '',
  date: '',
  time: '',
  email: '',
  phone: '',
  total: 0
};

export function AppointmentProvider({ children }) {
  const [appointmentData, setAppointmentData] = useState(initialAppointmentData);

  const updateAppointmentData = useCallback((newData) => {
    setAppointmentData(prevData => {
      // Solo actualizar si hay cambios reales
      const hasChanges = Object.keys(newData).some(
        key => prevData[key] !== newData[key]
      );
      
      if (!hasChanges) return prevData;
      
      return {
        ...prevData,
        ...newData
      };
    });
  }, []);

  const resetAppointmentData = useCallback(() => {
    setAppointmentData(initialAppointmentData);
  }, []);

  const contextValue = useMemo(() => ({
    appointmentData,
    updateAppointmentData,
    resetAppointmentData
  }), [appointmentData, updateAppointmentData, resetAppointmentData]);

  return (
    <AppointmentContext.Provider value={contextValue}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return context;
} 