import { Research } from "@/types/research";
import { Pressable, Text, View } from "react-native";

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
    <View>
      {/*  Lab  */}
      <View>
        <Text>{slot}</Text>
        <Text>{timer}</Text>
        <Text>{multiplier}</Text>
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
