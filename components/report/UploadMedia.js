import { StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

export default function UploadMedia({ onPressHandler, label, icon }) {
  return (
    <View style={styles.uploadContainer}>
      <Pressable style={styles.uploadButton} onPress={onPressHandler}>
        <Entypo name={icon} size={24} color="white" />
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  uploadButton: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
    backgroundColor: Colors.primary400,
    paddingVertical: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
