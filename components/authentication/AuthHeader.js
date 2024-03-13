import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function AuthHeader({ text }) {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/crs-logo_cropped.png")}
        />
        <Text style={styles.systemName}>Crime Reporting System</Text>
      </View>
      <Text style={styles.title}>{text}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  systemName: {
    color: Colors.textColor,
    fontSize: 24,
  },
  logo: {
    width: 100,
    height: 100,
    borderWidth: 1,
    marginVertical: 21,
  },
  title: {
    color: Colors.textColor,
    fontSize: 24,
    marginBottom: 25,
  },
});
