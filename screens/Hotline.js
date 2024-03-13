import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { Octicons } from "@expo/vector-icons";
import {
  barangayHotlines,
  emergencyHotlineNumbers,
  majorHotlines,
} from "../util/hotlinesData";

export default function Hotline() {
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.hotlineNumberWrapper}>
        <View style={styles.emergencyHotline}>
          <Text style={styles.title}>DAGUPAN EMERGENCY HOTLINE NUMBERS:</Text>
          {emergencyHotlineNumbers.map((data, index) => (
            <View key={index} style={styles.hotlineContainer}>
              <Text style={{ color: "#e1ad01" }}>{data.label}:</Text>
              {data.contactNo.map((contactNo, index) => (
                <View key={index} style={styles.hotlineNumber}>
                  <Octicons name="dot-fill" size={10} color="white" />
                  <Text style={styles.hotline}>{contactNo}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
        <View style={styles.emergencyHotline}>
          <Text style={styles.title}>BARANGAY PANTAL HOTLINE NUMBERS:</Text>
          {barangayHotlines.map((data, index) => (
            <View key={index} style={styles.hotlineContainer}>
              <Text style={{ color: "#e1ad01" }}>{data.label}:</Text>
              {data.contactNo.map((contactNo, index) => (
                <View key={index} style={styles.hotlineNumber}>
                  <Octicons name="dot-fill" size={10} color="white" />
                  <Text style={styles.hotline}>{contactNo}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
        <View style={styles.emergencyHotline}>
          <Text style={styles.title}>MAJOR HOTLINE NUMBERS:</Text>
          {majorHotlines.map((data, index) => (
            <View key={index} style={styles.hotlineContainer}>
              <Text style={{ color: "#e1ad01" }}>{data.label}:</Text>
              {data.contactNo.map((contactNo, index) => (
                <View key={index} style={styles.hotlineNumber}>
                  <Octicons name="dot-fill" size={10} color="white" />
                  <Text style={styles.hotline}>{contactNo}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.bgDark,
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 12,
  },
  hotlineNumberWrapper: { gap: 25, paddingBottom: 50 },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  emergencyHotline: {
    gap: 6,
  },
  hotline: {
    color: "white",
  },
  hotlineNumber: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginLeft: 12,
  },
});
