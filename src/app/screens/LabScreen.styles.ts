import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#241F5C",
    },
  
    header: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#37327E",
        borderBottomWidth: 2,
        borderBottomColor: "#00D6C7",
      },
      
      topRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      },
      
      bottomRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },

      statBox: {
        flex: 1,
        alignItems: "center"
      },

      stat: {
        color: "white",
        fontSize: 15,
        fontWeight: "800",
        letterSpacing: 0.5,
        marginHorizontal: 8
      },

      dropdown: {
        color: "white",
        fontSize: 18,
        fontWeight: "900",
        marginLeft: 6
      },

      title: {
        color: "#FFFFFF",
        fontSize: 19,
        fontWeight: "800",
        letterSpacing: 0.5,
      },

      alertButton: {
        margin: 12,
        paddingVertical: 12,
        backgroundColor: "white",
        borderRadius: 6,
        alignItems: "center",
      },

      alertButtonText: {
        color: "red",
        fontSize: 16,
        fontWeight: "700"
      },

      icon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
      },
      
      statRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4, 
      },

})