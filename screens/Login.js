import { useContext, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";

import { Colors } from "../constants/Colors";
import { statusBarHeight } from "../constants/DeviceSizes";

import AuthField from "../components/authentication/AuthField";
import AuthButton from "../components/authentication/AuthButton";
import AuthNavigator from "../components/authentication/AuthNavigator";
import AuthHeader from "../components/authentication/AuthHeader";
import { AuthContext } from "../context/authContext";
import { authError } from "../util/validateCredentials";

export default function Login({ navigation }) {

  const { login, setAuthenticating } = useContext(AuthContext);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const onChangeUserInputHandler = (key, enteredValue) => {
    setUserInput((prev) => ({ ...prev, [key]: enteredValue.trim() }));
  };

  const loginHandler = async () => {
    setAuthenticating(true);
    try {
      await login(userInput.email, userInput.password);
    } catch (error) {
      Alert.alert("Can't log you in",authError(error.code));
      console.log(error.code)
      setAuthenticating(false);
    }
  };

  return (
    <View style={styles.root}>
      <ScrollView>
        <AuthHeader text="Login" />
        <View style={styles.controlls}>
          <AuthField
            label="Email"
            setValue={onChangeUserInputHandler}
            inputKey={"email"}
            value={userInput.username}
          />
          <AuthField
            label="Password"
            isPasswordField={true}
            setValue={onChangeUserInputHandler}
            inputKey={"password"}
            value={userInput.password}
          />
          <AuthButton title="Login" pressHandler={loginHandler} />
          <AuthNavigator
            name="Signup"
            text="Don't have an account?"
            pressHandler={() => navigation.replace("Signup")}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: statusBarHeight + 10,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: Colors.primary400,
  },
  controlls: {
    gap: 10,
  },
});
