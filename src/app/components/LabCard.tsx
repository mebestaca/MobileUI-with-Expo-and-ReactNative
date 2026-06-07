import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./LabCard.styles";

type Props = {
  labNumber: number;
  title: string;
  level: number;
  currentValue: string;
  nextValue: string;
  timeRemaining: string;
  multiplier: string;
  rushCost: number;
  progressTime: string;
  progress: number;
};

const LabCard = ({
  labNumber,
  title,
  level,
  currentValue,
  nextValue,
  timeRemaining,
  multiplier,
  rushCost,
  progressTime,
  progress,
}: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.labText}>
          Lab {labNumber}
        </Text>

        <View style={styles.headerRight}>
          <Text style={styles.timer}>
            {timeRemaining}
          </Text>

          <Text style={styles.multiplier}>
            {multiplier}
          </Text>
        </View>
      </View>

      <View style={styles.topRow}>

       <View>
            <Text style={styles.title}>
            {title} Lv.{level}
            </Text>

            <Text style={styles.value}>
          {currentValue} » {nextValue}
            </Text>
        </View>

            <TouchableOpacity style={styles.rushBox}>
                <Text style={styles.rushTitle}>
                Rush
                </Text>

                <Text style={styles.rushCost}>
                    {rushCost} 💎
                </Text>
            </TouchableOpacity>
          
      </View>

     
      
      <View style={styles.bottomRow}>

        <View style={styles.timerBox}>
            <Text style={styles.timerIcon}>⏱</Text>
        </View>

        <View style={styles.progressSection}>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${progress}%`,
                  },
                ]}
              />

              <Text style={styles.progressText}>
                {progressTime}
              </Text>
            </View>
          </View>



        <TouchableOpacity style={styles.speedButton}>
          <Text style={styles.speedText}>
            Speed Up
          </Text>
        </TouchableOpacity>
      </View>

      </View>
        

  );
};

export default LabCard;