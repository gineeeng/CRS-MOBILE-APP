import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function AuthField({
  label,
  setValue,
  value,
  pressHanlder = () => {},
  inputKey,
  isPasswordField = false,
  isEditable = true,
  mode = "text",
  error = {},
  placeholder = "",
  addressFormat = "",
}) {
  return (
    <Pressable style={styles.container} onPress={pressHanlder}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>
          {label}{" "}
          {addressFormat && (
            <Text style={styles.addressFormat}>{addressFormat}</Text>
          )}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={[styles.textInput, error[inputKey] && styles.inputErrorStyle]}
          value={value}
          autoCapitalize="none"
          secureTextEntry={isPasswordField}
          onChangeText={setValue.bind(this, inputKey)}
          editable={isEditable}
          inputMode={mode}
          placeholder={placeholder}
          placeholderTextColor={"grey"}
        />
        {error[inputKey] && (
          <MaterialIcons
            name="error"
            size={20}
            color={Colors.error400}
            style={{ position: "absolute", right: 10 }}
          />
        )}
      </View>
      {error[inputKey] && (
        <Text style={styles.errorText}>{error[inputKey]}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  label: {
    fontSize: 18,
    color: "#99adba",
  },
  addressFormat: {
    fontSize: 12,
    color: "grey",
    alignSelf: "center",
  },
  errorText: {
    color: Colors.error400,
    marginVertical: -5,
  },
  textInput: {
    backgroundColor: Colors.inputBgColor,
    fontSize: 15,
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
    flex: 1,
  },
  inputErrorStyle: {
    borderColor: Colors.error400,
  },
});
