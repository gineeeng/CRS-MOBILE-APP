import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { limitStringLength } from "../../../util/stringFormatter";

export default function FileNamePreview({ fileName, onPress, fileType }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable onPress={onPress}>
        <Ionicons name="close-circle-outline" size={24} color="white" />
      </Pressable>
      <Text style={styles.text}>
        {limitStringLength(fileName, 20)}.{fileType}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "grey",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 6,
    width: 250,
    gap: 5,
  },
  iconStyle: {
    verticalAlign: "middle",
  },
  text: {
    color: "white",
  },
});
