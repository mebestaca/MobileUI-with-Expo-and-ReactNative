# Assignment: Building a Mobile UI with Expo and React Native

This assignment is designed to get you comfortable with working in the expo environment. You will learn how to create a basic React Native project using Expo with TypeScript. You will create a button that triggers an alert when pressed. While some class time will be provided, you should also plan to invest time outside of class. Please see the course schedule and Brightspace for exact due dates. This assignment should be done in groups of 3.

Plagiarism detection software will be used on all student submissions. Please refer to SAIT’s policies and procedures on Student Academic Conduct (A.C.3.4.3) for more information.

## Instructions

#1. Take a snapshot of your favorite mobile app. This might be an Instagram landing page, X feed or a banking app home page. Two sample snapshots are provided below. You can use one of them in this assignment. If you choose your own, the page should be similar in complexity to the sample.

2. Create a new Expo project. Run: npx create-expo-app@latest .

3. Reset the project using npm run reset-project command

4. Run the application and modify the index.tsx file to achieve the following;

- Copy the snapshot of your favorite mobile app in your new application. Try to match the colors, button sizes and other components using the View, Button, Text and any other tag you might need. You do not have to use the same pictures as in the snapshot, just comparable pictures. Use Stylesheet from react-native to style the page. Attempt to match the snapshot at least 80%.

- None of the copied features such as buttons need to be active or work. The cloning/copying part of the assignment is simply to give practice in using React Native tags and styling.

- Add a button at the bottom of the page. Name the button “Alert”. When it is clicked, an Alert should pop up on the page that says “Alert Button pressed”.

5. Push the code to a GitHub repository in which all members of the group are collaborators. There must be at least 3 commits in the repo and all members must have contributed. The group might have to demonstrate the code in-person during the in-person class on both android and iOS.

6. Submit your GitHub repository link and the screenshot you copied to D2L and make sure the repository has public visibility.

7. Only students who have actively contributed code and collaborated through GitHub will be eligible to receive this grade. While one student may submit the final work, the contributions of all group members must be clearly visible and verifiable in the GitHub repository.

## Sample Output

The one on the left is the reference image. The one in the middle is the output of the code of this branch. The one to the right is the alert notification.
![alt text](https://github.com/mebestaca/MobileUI-with-Expo-and-ReactNative/blob/master/src/app/assets/finalproduct.png)

## Credits

### This Project from the Lab

to quickly copy and paste some important patterns </br>
https://github.com/mebestaca/week3-lab-starter

### Image Color Picker

to quickly figure out the color of a certain pixel </br>
https://imagecolorpicker.com/

### This stackoverflow thread

to fix the ScrollView not scrolling all the way down which also causes your footer to not show up </br>
https://stackoverflow.com/questions/45132731/cannot-scroll-to-bottom-of-scrollview-in-react-native

## Quick Reference

### Setup

index.tsx

```
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavSection from "./components/BottomNav/BottomNavSection";
import CurrencySection from "./components/currency/CurrencySection";
import LabSection from "./components/lab/LabSection";
import ResearchSection from "./components/research/ResearchSection";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CurrencySection />
      <LabSection />
      <ScrollView contentContainerStyle={{ paddingBottom: 27 }}>
        <ResearchSection />
      </ScrollView>
      <BottomNavSection />
    </SafeAreaView>
  );
}
```

\_layout.tsx

```
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
```

### Currency Section

CurrencySection.tsx

```
import { View } from "react-native";
import CurrencyList from "./CurrencyList";

export default function CurrencySection() {
  return (
    <View>
      <CurrencyList />
    </View>
  );
}
```

CurrencyList.tsx

```
import { currencies } from "@/data/currencies";
import { Image, StyleSheet, View } from "react-native";
import CurrencyCard from "./CurrencyCard";

export default function CurrencyList() {
  return (
    <View style={styles.currencyContainer}>
      {currencies.map((res) => (
        <CurrencyCard resource={res} key={res.id} />
      ))}
      <Image
        source={require("../../assets/currencies_image.png")}
        style={{ height: 18, width: 22, marginTop: 3, marginRight: 13 }}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  currencyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
    backgroundColor: "#353172",
  },
});
```

CurrencyCard.tsx

```
import { Currency } from "@/types/currency";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  resource: Currency;
};

export default function CurrencyCard({ resource }: Props) {
  const { name, value, image } = resource;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 12,
        gap: 5,
      }}
    >
      <Image source={image as any} style={{ height: 18, width: 18 }}></Image>
      <Text style={styles.textStyle}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 18,
  },
});
```

### Lab Section

LabSection.tsx

```
import { Image, StyleSheet, Text, View } from "react-native";

export default function LabSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>LAB</Text>
      <View style={styles.stoneContainer}>
        <Image
          source={require("../../assets/cells_image.png")}
          style={{ height: 22, width: 22, marginRight: 10 }}
        ></Image>
        <Text style={styles.textStyle}>1.18M</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#353172",
    alignItems: "center",
    paddingLeft: 13,
    paddingRight: 12,
  },
  stoneContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textStyle: {
    color: "white",
    fontSize: 18,
  },
});
```

### Research Section

ResearchSection.tsx

```
import { View } from "react-native";
import ResearchList from "./ResearchList";

export default function ResearchSection() {
  return (
    <View>
      <ResearchList />
    </View>
  );
}

```

ResearchList.tsx

```
import { researchdata } from "@/data/researchdata";
import { View } from "react-native";
import ResearchCard from "./ResearchCard";

export default function ResearchList() {
  return (
    <View style={{ backgroundColor: "#111F2C" }}>
      {researchdata.map((res) => (
        <ResearchCard resource={res} key={res.id} />
      ))}
    </View>
  );
}

```

ResearchCard.tsx

```
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
```

### Bottom Nav Section

```
import { Alert, Image, Pressable, Text, View } from "react-native";

export default function BottomNavSection() {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: 50, width: 50, flex: 1 }}
        source={require("../../assets/attack_image.png")}
      />
      <Image
        style={{ height: 50, width: 50, flex: 1 }}
        source={require("../../assets/build_image.png")}
      />
      <Image
        style={{ height: 50, width: 50, flex: 1 }}
        source={require("../../assets/card_image.png")}
      />
      <Image
        style={{ height: 50, width: 50, flex: 1 }}
        source={require("../../assets/module_image.png")}
      />
      <Image
        style={{ height: 50, width: 50, flex: 1 }}
        source={require("../../assets/lab_image.png")}
      />
      <Image
        style={{ height: 50, width: 50, flex: 1 }}
        source={require("../../assets/shop_image.png")}
      />
      <Pressable
        style={{ height: 50, backgroundColor: "white" }}
        onPress={() => {
          console.log("ALERT CLICKED");
          Alert.alert("Alert", "Alert Button pressed");
        }}
      >
        <Text>Alert</Text>
      </Pressable>
    </View>
  );
}


```
