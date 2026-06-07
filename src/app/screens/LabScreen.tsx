import React, {useState} from "react";
import { View, FlatList, Text, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


import LabCard from "../components/LabCard";
import { mockLabs } from "../data/mockLabs";
import { styles } from "./LabScreen.styles";
import Footer from "../components/Footer";

const LabScreen = () => {
  return (
    <SafeAreaView
      style={styles.container}
      edges={["top"]}
    >

        <View style={styles.header}>

        {/* TOP ROW */}
        <View style={styles.topRow}>

            <View style={styles.statBox}>
                <Text style={styles.stat}>Ⓒ 3.98q</Text>
            </View>
        
            <View style={styles.statBox}>
                <Text style={styles.stat}>💎 1061</Text>
            </View>

            <View style={styles.statBox}>
                <Text style={styles.stat}>▲ 1385</Text>
            </View>
        
            <View style={styles.statBox}>
                <Text style={styles.dropdown}>˅</Text>
            </View>

        </View>

        {/* BOTTOM ROW */}
        <View style={styles.bottomRow}>
        <Text style={styles.title}>LAB</Text>
        <Text style={styles.stat}>▲ 1.18M</Text>
        </View>

        </View>

        <View style={{ flex: 1}}>
            <FlatList
                data={mockLabs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <LabCard {...item} />
                )}
            />
        </View>

        <TouchableOpacity
            style={styles.alertButton}
            onPress={() => {
                console.log("ALERT CLICKED");
                Alert.alert("Alert", "Alert Button pressed")
            }}
            >
            <Text style={styles.alertButtonText}>
             ⚠️⚠️⚠️ ALERT ⚠️⚠️⚠️
            </Text>
        </TouchableOpacity>

        <Footer />
        
    </SafeAreaView>
  );
};

export default LabScreen;
