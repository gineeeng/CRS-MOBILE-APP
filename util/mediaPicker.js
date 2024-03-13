import { Alert, Linking } from "react-native";
import * as ImagePicker from "expo-image-picker";

const verifyCameraPermission = async () => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  console.log(status);
  if (status !== "granted") {
    Alert.alert(
      "Permission Denied",
      "to access the camera please allow the camera permission in the app settings",
      [
        { text: "cancel" },
        { text: "Go to settings", onPress: () => Linking.openSettings() },
      ]
    );
    return false;
  }

  return true;
};

const verifyMediaLibrary = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (status !== "granted") {
    Alert.alert(
      "Permission Denied",
      "Please allow the Files and Media permission in the app settings",
      [
        { text: "cancel" },
        { text: "Go to settings", onPress: () => Linking.openSettings() },
      ]
    );
    return false;
  }

  return true;
};

export const pickImages = async (setFiles, setIsLoading, files) => {
  const permission = await verifyMediaLibrary();
  if (!permission) return;

  setIsLoading(true);
  try {
    console.log(files.length);
    if (files.length >= 4)
      throw new Error("You've reach the maximum number of image to upload");

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 4,
    });

    if (!result.canceled) {
      if (result.assets.length + files.length > 4)
        throw new Error("You've reach the maximum number of image to upload");

      setFiles((prev) => prev.concat(result.assets));
    }
  } catch (error) {
    Alert.alert("Sorry", error.message);
    console.log("Error while selecting file: ", error);
  }
  setIsLoading(false);
};

export const pickVideos = async (setFiles, setIsLoading, files) => {
  const permission = await verifyMediaLibrary();
  if (!permission) return;

  setIsLoading(true);
  try {
    if (files.length > 0) throw new Error("You can only upload one video");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 1,
    });

    if (!result.canceled) {
      setFiles((prev) => prev.concat(result.assets));
    } else {
      setIsLoading(false);
    }
  } catch (error) {
    Alert.alert("Sorry", error.message);
    console.log("Error while selecting file: ", error);
    setIsLoading(false);
  }
};

export const launchVideoCamera = async (setFiles, setIsLoading) => {
  const permission = await verifyCameraPermission();
  if (!permission) return;

  setIsLoading(true);
  try {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 0,
    });

    if (!result.canceled) setFiles((prev) => prev.concat(result.assets));
  } catch (error) {
    console.log("Error while taking a video: ", error);
  }
  setIsLoading(false);
};

export const launchCamera = async (setFiles, setIsLoading) => {
  const permission = await verifyCameraPermission();

  if (!permission) return;

  setIsLoading(true);
  try {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    if (!result.canceled) setFiles((prev) => prev.concat(result.assets));
  } catch (error) {
    console.log("Error while taking a picture: ", error);
  }
  setIsLoading(false);
};
