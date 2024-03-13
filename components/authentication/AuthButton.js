import { StyleSheet, Text, Pressable, ActivityIndicator } from "react-native";
import { Colors } from "../../constants/Colors";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export default function AuthButton({ title, pressHandler }) {
  const { authenticating } = useContext(AuthContext);

  return (
    <Pressable
      android_ripple={true}
      style={({ pressed }) => [styles.container, pressed && styles.press]}
      onPress={pressHandler}
      disabled={authenticating}
    >
      {authenticating ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent400,
    paddingVertical: 8,
    borderRadius: 4,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  press: {
    opacity: 0.5,
  },
});
