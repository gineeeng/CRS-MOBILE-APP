import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function AuthNavigator({ text, name, pressHandler }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text} <Text style={styles.link} onPress={pressHandler}>{name}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: Colors.textColor,
    textAlign: "center",
  },
  link: {
    color: Colors.accent400,
  },
});
