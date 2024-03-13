import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Tooltip from "react-native-walkthrough-tooltip";
import { useState } from "react";

export default function InfoTooltip() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Tooltip
      isVisible={isVisible}
      content={
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginBottom: 4,
            }}
          >
            <Ionicons name="information-circle" size={24} color="#337ab7" />
            <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
              Upload Guidlines
            </Text>
          </View>
          <View style={{ gap: 4 }}>
            <View>
              <Text style={{ fontWeight: "500" }}>Images:</Text>
              <Text style={{ marginLeft: 4, fontWeight: "400" }}>
                You can upload up to 4 images per post.
              </Text>
            </View>
            <View>
              <Text style={{ fontWeight: "500" }}>Videos:</Text>
              <Text style={{ marginLeft: 4, fontWeight: "400" }}>
                One video is permitted per report. Please ensure the video
                duration does not exceed 5 minutes.
              </Text>
            </View>
          </View>
        </View>
      }
      allowChildInteraction={false}
      placement="top"
      onClose={() => setIsVisible(false)}
      showChildInTooltip={false}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#3c4c85",
          paddingVertical: 6,
          paddingHorizontal: 4,
          borderRadius: 8,
        }}
        onPress={() => setIsVisible(true)}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Ionicons name="information-circle" size={24} color="white" />
          <Text style={{ color: "white" }}>Please read this guidelines</Text>
        </View>
      </TouchableOpacity>
    </Tooltip>
  );
}

const styles = StyleSheet.create({});
