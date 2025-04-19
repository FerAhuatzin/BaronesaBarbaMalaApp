import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Service } from '@/types/service';
import { mockServices } from './mock-data';
import { fontSizes } from '../../../constants/font-sizes';
import { ChevronUpIcon, ChevronDownIcon } from '../../../constants/Icons';

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

  const servicesByType = services.reduce((acc, service) => {
    if (!acc[service.type]) {
      acc[service.type] = [];
    }
    acc[service.type].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

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
      style={styles.container}
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
              <Text style={styles.categoryTitle}>{toTitleCase(type)}</Text>
              <View style={styles.categoryHeaderRight}>
                {selectedCount > 0 && (
                  <Text style={styles.selectedCount}>{selectedCount} seleccionados</Text>
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
                      <View style={styles.serviceContent}>
                        <Text style={[
                          styles.serviceName
                        ]}>
                          {service.name}
                        </Text>
                        <Text style={styles.servicePrice}>
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
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: "90%",
    alignSelf: "center",
  },
  categoryContainer: {
    overflow: 'hidden',
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  categoryHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: fontSizes.subTitles,
  },
  selectedCount: {
    fontSize: fontSizes.captions,
    color: '#666',
    marginRight: 8,
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
  selectedService: {
    fontWeight: 'bold',
  },
  serviceContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceName: {
    fontSize: fontSizes.body,
    width: "75%",
  },
  servicePrice: {
    fontSize: fontSizes.captions,
    color: '#666',
    width: "20%",
    
  },
  bottomPadding: {
    height: 100,
  },
});


