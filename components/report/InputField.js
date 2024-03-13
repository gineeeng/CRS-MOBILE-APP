import { StyleSheet, Text, View, TextInput } from "react-native";
import { Colors } from "../../constants/Colors";

export default function InputField({
  label,
  type,
  onChangeHandler,
  keyName,
  subKey = "",
}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={type}
        onChangeText={(value) => onChangeHandler(keyName, value, subKey)}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    color: "white",
  },
  input: {
    color: "white",
    paddingHorizontal: 2,
    paddingVertical: 6,
    fontSize: 16,
    backgroundColor: Colors.bgDark,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.inputBorderColor,
  },
});
