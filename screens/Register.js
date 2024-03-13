import { useContext, useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";
import { AuthContext } from "../context/authContext";

import { authFields } from "../util/authFieldProps";
import { fromatInputDate } from "../util/dateFormatter";

import { Colors } from "../constants/Colors";
import { statusBarHeight } from "../constants/DeviceSizes";

import AuthField from "../components/authentication/AuthField";
import AuthButton from "../components/authentication/AuthButton";
import AuthNavigator from "../components/authentication/AuthNavigator";
import AuthHeader from "../components/authentication/AuthHeader";
import {
  authError,
  validateSignupCredentials,
} from "../util/validateCredentials";

export default function Register({ navigation }) {
  const authCtx = useContext(AuthContext);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errors, setErrors] = useState({});
  const [userInput, setUserInput] = useState({
    id: "",
    name: "",
    profilePic: "",
    email: "",
    birthday: "dd/mm/yyyy",
    sex: "",
    address: "",
    contact_no: "",
  });

  const onChangeUserInputHandler = (key, enteredValue) => {
    setUserInput((prev) => ({ ...prev, [key]: enteredValue }));
  };

  const onChangeDateHandler = (event, selectedDate) => {
    setShowDatePicker(false);
    if (event.type === "set")
      setUserInput((prev) => ({
        ...prev,
        ["birthday"]: fromatInputDate(selectedDate),
      }));
  };

  const registerHandler = async () => {
    const { valid, validateInputs } = validateSignupCredentials(
      userInput,
      setErrors
    );
    if (valid) {
      try {
        authCtx.setAuthenticating(true);

        const { uid } = await authCtx.signUp(
          validateInputs.email,
          validateInputs.password
        );
        validateInputs.id = uid;

        const data = await axios({
          method: "post",
          url: `https://crs-api.onrender.com/api/users`,
          data: validateInputs,
          headers: { "Content-Type": "application/json" },
        });

        console.log(data.status);
      } catch (error) {
        console.log(error);
        authCtx.logout();
        Alert.alert("Can't Sign you in", authError(error.code));
        authCtx.setAuthenticating(false);
      }
    }
  };

  return (
    <View style={styles.root}>
      <ScrollView style={{ marginBottom: 16 }}>
        <View style={styles.container}>
          <AuthHeader text="Registration" />
          <View style={styles.controlls}>
            {authFields.map((obj) => (
              <AuthField
                key={obj.key}
                inputKey={obj.key}
                value={userInput[obj.key]}
                setValue={onChangeUserInputHandler}
                pressHanlder={
                  obj.key === "birthday"
                    ? () => {
                        setShowDatePicker(true);
                      }
                    : () => {}
                }
                error={errors}
                {...obj.props}
              />
            ))}
            {showDatePicker && (
              <DateTimePicker
                value={new Date()}
                mode="date"
                display="default"
                onChange={onChangeDateHandler}
              />
            )}
            <AuthButton
              title="Register"
              pressHandler={registerHandler}
              inputKey={"password"}
            />
            <AuthNavigator
              name="Login"
              text="Already have an account?"
              pressHandler={() => navigation.replace("Login")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: statusBarHeight + 10,
    flex: 1,
    backgroundColor: Colors.primary400,
  },
  container: {
    paddingHorizontal: 20,
  },
  controlls: {
    gap: 10,
  },
});
