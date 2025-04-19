import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { colors } from '../../constants/colors';
import { fontSizes } from '../../constants/font-sizes';

interface CircleProgressProps {
  points: number;
}

export default function CircleProgress({ points }: CircleProgressProps) {
  const radius = 80;
  const radius_barba_mala = 70;
  const strokeWidth = 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <TouchableOpacity style={styles.container}>
      <Svg width={200} height={200}>
        {/* Círculo gris (fondo) */}
        <Circle
          stroke="#eee"
          fill="none"
          cx={100}
          cy={100}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Círculo amarillo (progreso) */}
        <Circle
          stroke={colors.barba_mala}
          fill="none"
          cx={100}
          cy={100}
          r={radius_barba_mala}
          strokeWidth={strokeWidth}
        />
      </Svg>
      {/* Texto en el centro */}
      <View style={styles.textContainer}>
        <Text style={styles.pointsText}>{points}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointsText: {
    fontSize: fontSizes.subTitles,
  },
});

