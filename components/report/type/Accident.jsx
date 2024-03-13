import { StyleSheet, View } from "react-native";
import { severityLevels } from "../../../util/reportData";
import Dropdown from "../Dropdown";
import InputField from "../InputField";

export default function Accident({ onChangeHandler }) {
  return (
    <View style={styles.container}>
      <InputField
        label="Number of casualties"
        type={"number-pad"}
        onChangeHandler={onChangeHandler}
        keyName="numberOfCasualties"
      />
      <InputField
        label="Number of injuries"
        type={"number-pad"}
        keyName="numberOfInjuries"
        onChangeHandler={onChangeHandler}
      />
      <Dropdown
        label="Injury Severity"
        options={severityLevels}
        onChangeHandler={onChangeHandler}
        keyName="injurySeverity"
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { gap: 16 } });
