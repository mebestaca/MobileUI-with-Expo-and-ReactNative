import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Footer.styles";

export default function Footer() {
  return (
    <View style={styles.footer}>

      <TouchableOpacity style={styles.tab}>
        <Text style={styles.icon}>⚔️</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        <Text style={styles.icon}>🔨</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        <Text style={styles.icon}>💠</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        <Text style={styles.icon}>🎯</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.activeTab}>
        <Text style={styles.icon}>🧪</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        <Text style={styles.icon}>🛒</Text>
      </TouchableOpacity>

    </View>
  );
}

