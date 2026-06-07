import { currencies } from "@/data/currencies";
import { Research } from "@/types/research";
import { Pressable, Text, View, StyleSheet } from "react-native";

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
  } = resource;
  return (
    <View style={styles.base}>
      {/*  Lab  */}
      <View style={styles.labbox}>
        <Text style={styles.text}>{slot}</Text>
        {/* separation of title and timer*/}
        <View>
          <Text style={styles.text}>{timer}</Text>
          <Text style={styles.text}>{multiplier}</Text>
        </View>
      </View>

      {/* Name */}
      <View style={styles.labCont}>
        <View>
          <View>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>
              {statOld} {">>"} {statNew}
            </Text>
          </View>
          {/* rushbox */}
          <View>
            <Pressable onPress={() => console.log("Button pressed!")}>
              <Text style={styles.text}>Rush</Text>
              <Text style={styles.currency}>{cost}</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {/* timer */}
      <View>
        <Text style={styles.text}>{queued}</Text>
        <Text style={styles.text}>{timerLeft}</Text>
        <Text style={styles.text}>Speed Up</Text>
      </View>
    </View>
  );
}

// style={styles.rushbox}

const styles = StyleSheet.create({
  labCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 3,
    backgroundColor: "#1B2430",
    color: "#ffffff",
  },
  text: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "semibold",
  },
  currency: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#344C5F",
    textAlign: "center",
    backgroundColor: "#1E2B3E",
  },
  labbox: {
    backgroundColor: "#243C36",
    borderWidth: 1,
    borderColor: "#5A9B7F",
  },

  base: {
    backgroundColor: "#1C1D2D",
  },
});
