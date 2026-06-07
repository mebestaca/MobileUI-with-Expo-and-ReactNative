import { Research } from "@/types/research";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  resource: Research;
};

export default function ResearchCard({ resource }: Props) {
  const {
    id,
    slot,
    timer,
    multiplier,
    name,
    statOld,
    statNew,
    cost,
    timerLeft,
    queued,
    rushed,
    progress,
  } = resource;
  return (
    <View style={styles.cardContainer}>
      {/* Header / Lab Slot */}
      <View style={styles.headerRow}>
        <Text style={styles.textStyle}>{slot}</Text>
        <View style={styles.row}>
          <Text style={styles.textStyle2}>{timer}</Text>
          <Text style={styles.textStyle2}>{multiplier}</Text>
        </View>
      </View>

      {/* Main Body / Name & Stats */}
      <View style={styles.bodyContainer}>
        <View style={styles.statsColumn}>
          <Text style={styles.textStyle}>{name}</Text>
          <Text style={styles.textStyle}>
            {statOld} {">>"} {statNew}
          </Text>
        </View>

        {/* Rush Action Button */}
        <Pressable
          onPress={() => {
            console.log("ALERT CLICKED");
          }}
          style={rushed ? styles.rushButton2 : styles.rushButton}
        >
          <Text style={styles.textStyle4}>Rush</Text>
          <View style={rushed ? styles.gemRow2 : styles.gemRow}>
            <Text style={styles.textStyle3}>{cost}</Text>
            <Image
              source={require("../../assets/gem_image.png")}
              style={styles.gemIcon}
            />
          </View>
        </Pressable>
      </View>

      {/* Footer / Queue and Speed Up status */}
      <View style={styles.footerContainer}>
        <Image
          source={
            queued
              ? require("../../assets/queue_image.png")
              : require("../../assets/unqueue_image.png")
          }
          style={{ height: 25, width: 25 }}
        />

        <View style={styles.progressBorder}>
          <View
            style={{
              height: "100%",
              backgroundColor: "#52d6a4",
              width: `${progress}%`,
              position: "absolute",
            }}
          />
          <Text style={styles.textStyle5}>{timerLeft}</Text>
        </View>
        <Pressable>
          <Text style={styles.speedUpText}>Speed Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: "#265C50",
    margin: 10,
    borderWidth: 2,
    backgroundColor: "#111F2C",
  },
  headerRow: {
    flexDirection: "row",
    borderColor: "#265C50",
    borderWidth: 2,
    paddingLeft: 5,
    justifyContent: "space-between",
    backgroundColor: "#173631",
    alignItems: "center",
    paddingVertical: 4,
  },
  bodyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  statsColumn: {
    margin: 5,
  },
  row: {
    flexDirection: "row",
  },
  gemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    borderColor: "#1D3B51",
    borderTopWidth: 1,
    padding: 4,
  },
  gemRow2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    borderColor: "white",
    borderTopWidth: 1,
    padding: 4,
  },
  rushButton: {
    backgroundColor: "#111F2C",
    alignItems: "stretch",
    borderColor: "#1D3B51",
    borderWidth: 1,
    width: 60,
  },
  rushButton2: {
    backgroundColor: "#353172",
    alignItems: "stretch",
    borderColor: "white",
    borderWidth: 1,
    width: 60,
  },
  gemIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  footerContainer: {
    alignItems: "center",
    padding: 8,
    borderTopWidth: 1,
    borderColor: "#265C50",
    flexDirection: "row",
  },
  textStyle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  textStyle2: {
    color: "#00ff00",
    fontSize: 18,
    marginLeft: 20,
    paddingRight: 5,
  },
  textStyle3: {
    color: "white",
    fontSize: 15,
  },
  textStyle4: {
    color: "white",
    fontSize: 15,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle5: {
    color: "white",
    fontSize: 15,
    paddingLeft: 70,
  },
  speedUpText: {
    borderWidth: 2,
    borderColor: "white",
    paddingLeft: 15,
    paddingRight: 15,
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },

  progressBorder: {
    borderWidth: 2,
    borderColor: "white",
    marginLeft: 2,
    marginRight: 2,
    flex: 1,
    height: 25,
  },
});
