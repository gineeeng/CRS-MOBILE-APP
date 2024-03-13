import { StyleSheet, TextInput, View, Text } from "react-native";
import { Colors } from "../../constants/Colors";

export default function TextArea({ label, onChangeHanlder }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        multiline={true}
        onChangeText={(enteredValue) =>
          onChangeHanlder("description", enteredValue)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 18,
    color: "white",
  },
  textInput: {
    color: "white",
    paddingHorizontal: 2,
    backgroundColor: Colors.bgDark,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.inputBorderColor,
    alignItems: "flex-start",
    textAlignVertical: "top",
    height: 100,
  },
});
