import { View, StyleSheet, Text, ActivityIndicator } from "react-native";

import FileNamePreview from "./FileNamePreview";
import { extractFilename } from "../../../util/stringFormatter";

export default function Uploads({ files, onRemove, isLoading, label }) {
  return (
    <View style={styles.uploadContainer}>
      {files.length !== 0 && (
        <View style={styles.filePreview}>
          {files.map((file, index) => (
            <FileNamePreview
              key={index}
              fileName={extractFilename(file.uri)}
              fileType={file.type}
              onPress={() => onRemove(index)}
            />
          ))}
        </View>
      )}
      {files.length === 0 && !isLoading && <Text>No {label}</Text>}
      {isLoading && <ActivityIndicator size="small" color="black" />}
    </View>
  );
}

const styles = StyleSheet.create({
  uploadContainer: {
    backgroundColor: "#ebf3f3",
    width: "100%",
    alignItems: "center",
    borderRadius: 6,
    paddingVertical: 8,
  },
  filePreview: {
    gap: 5,
  },
});
