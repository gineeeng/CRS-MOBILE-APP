import { StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

export default function UploadImage({ onPressHandler }) {
  return (
    <View style={styles.uploadContainer}>
      <Pressable style={styles.uploadButton} onPress={onPressHandler}>
        <Entypo name="camera" size={24} color="white" />
        <Text style={styles.buttonText}>Upload images</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  uploadContainer: {
    marginVertical: 3,
  },
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
