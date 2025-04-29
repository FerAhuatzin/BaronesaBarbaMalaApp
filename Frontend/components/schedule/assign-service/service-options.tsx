import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Service } from '@/types/service';
import { mockServices } from './mock-data';
import { fontSizes } from '../../../constants/font-sizes';
import { ChevronUpIcon, ChevronDownIcon } from '../../../constants/Icons';
import { commonStyles } from '../../../constants/commonStyles';
import { useAppointment } from '@/context/AppointmentContext';

interface ServiceOptionsProps {
  services: Service[];
  onUpdateTotal: (newTotal: number) => void;
}

export default function ServiceOptions({ 
  services = mockServices, 
  onUpdateTotal 
}: ServiceOptionsProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const { updateAppointmentData } = useAppointment();

  const servicesByType = services.reduce((acc, service) => {
    if (!acc[service.type]) {
      acc[service.type] = [];
    }
    acc[service.type].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  useEffect(() => {
    const selectedServicesList = services.filter(service => selectedServices.includes(service.id));
    const servicesNames = selectedServicesList.map(service => service.name).join(', ');
    updateAppointmentData({
      serviceIds: selectedServices,
      service: servicesNames,
      total: total
    });
  }, [selectedServices, total]);

  const handleSelectService = (service: Service) => {
    setSelectedServices(prev => {
      const isSelected = prev.includes(service.id);
      let newSelected;
      
      if (isSelected) {
        newSelected = prev.filter(id => id !== service.id);
        const newTotal = total - service.price;
        setTotal(newTotal);
        onUpdateTotal(newTotal);
      } else {
        newSelected = [...prev, service.id];
        const newTotal = total + service.price;
        setTotal(newTotal);
        onUpdateTotal(newTotal);
      }
      
      return newSelected;
    });
  };

  const toTitleCase = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const toggleCategory = (type: string) => {
    setExpandedCategory(expandedCategory === type ? null : type);
  };

  return (
    <ScrollView 
      style={commonStyles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      {Object.entries(servicesByType).map(([type, typeServices]) => {
        const isExpanded = expandedCategory === type;
        const selectedCount = typeServices.filter(service => 
          selectedServices.includes(service.id)).length;
          
        return (
          <View key={type} style={styles.categoryContainer}>
            <TouchableOpacity 
              style={styles.categoryHeader}
              onPress={() => toggleCategory(type)}
            >
              <Text style={commonStyles.serviceText}>{toTitleCase(type)}</Text>
              <View style={commonStyles.row}>
                {selectedCount > 0 && (
                  <Text style={commonStyles.captionText}>{selectedCount} seleccionados</Text>
                )}
                {isExpanded ? (
                  <ChevronUpIcon size={20} style={styles.expandIcon} />
                ) : (
                  <ChevronDownIcon size={20} style={styles.expandIcon} />
                )}
              </View>
            </TouchableOpacity>
            
            {isExpanded && (
              <View style={styles.servicesList}>
                {typeServices.map(service => {
                  const isSelected = selectedServices.includes(service.id);
                  return (
                    <TouchableOpacity
                      key={service.id}
                      style={[
                        styles.serviceButton,
                        isSelected && styles.selectedServiceButton
                      ]}
                      onPress={() => handleSelectService(service)}
                    >
                      <View style={commonStyles.row}>
                        <Text style={styles.serviceName}>
                          {service.name}
                        </Text>
                        <Text style={commonStyles.captionText}>
                          ${service.price.toFixed(2)}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        );
      })}
      <View style={styles.bottomPadding} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    overflow: 'hidden',
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  expandIcon: {
    marginLeft: 4,
  },
  servicesList: {
    flexDirection: 'column',
  },
  serviceButton: {
    borderRadius: 15,
    padding: 12,
    marginBottom: 8,
    width: '100%',
  },
  selectedServiceButton: {
    backgroundColor: '#e0e0e0',
  },
  serviceName: {
    fontSize: fontSizes.body,
    width: "75%",
  },
  bottomPadding: {
    height: 100,
  },
});


