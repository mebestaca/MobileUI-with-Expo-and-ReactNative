import { Text, View, StyleSheet } from "react-native";

export default function LabSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LAB</Text>
      <View style={styles.imageTextPair}>
        
        <image></image>
        <Text style={styles.title}>1.18M</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    justifyContent:'space-between',
    padding: 10,
    gap:5,
    backgroundColor: "#1e2339",
  },
  title:{
    
    flexDirection: 'column',
    justifyContent:'space-between',
    padding:1,
    color:"#ffffff",
    borderColor:"#344C5F",

  },
  imageTextPair:{
    flexDirection: 'row',
    justifyContent:'space-between',
    gap:5,
  }
})