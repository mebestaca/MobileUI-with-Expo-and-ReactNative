import { Research } from "@/types/research";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
    <View style={{ borderColor: "#265C50", margin: 10, borderWidth: 2 }}>
      {/*  Lab  */}
      <View
        style={{
          flexDirection: "row",
          borderColor: "#265C50 ",
          borderWidth: 2,
          paddingLeft: 5,
          justifyContent: "space-between",
          backgroundColor: "#173631",
        }}
      >
        <Text style={styles.textStyle}>{slot}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textStyle2}>{timer}</Text>
          <Text style={styles.textStyle2}>{multiplier}</Text>
        </View>
      </View>

      {/* Name */}
      <View>
        <View>
          <View>
            <Text>{name}</Text>
            <Text>
              {statOld} {">>"} {statNew}
            </Text>
          </View>
          <View>
            <Pressable onPress={() => console.log("Button pressed!")}>
              <Text>Rush</Text>
              <Text>{cost}</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View>
        <Text>{queued}</Text>
        <Text>{timerLeft}</Text>
        <Text>Speed Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 18,
  },
  textStyle2: {
    color: "#00ff00",
    fontSize: 18,
    marginLeft: 20,
    paddingRight: 5,
  },
});
