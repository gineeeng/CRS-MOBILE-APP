import * as React from "react";
import { View, Alert } from "react-native";
import { Video } from "expo-av";

export default function VideoPreview({
  videoUri,
  setVideos,
  setLoading,
  setPreview,
}) {
  const video = React.useRef(null);

  const formatDuration = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);

    if (minutes <= 5) {
      setPreview([videoUri]);
    } else {
      setVideos([]);
      setPreview([]);
      Alert.alert(
        "Maximum Video Length Exceeded.",
        "The video you uploaded exceeds the maximum allowed duration of 5 minutes. Please shorten your video and resubmit."
      );
    }
    setLoading(false);
  };

  return (
    <View>
      {videoUri && (
        <Video
          ref={video}
          source={{
            uri: videoUri.uri,
          }}
          onLoad={(data) => formatDuration(data.durationMillis)}
        />
      )}
    </View>
  );
}
