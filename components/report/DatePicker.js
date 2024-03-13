import { StyleSheet, Text, Pressable, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { fromatInputDate } from "../../util/dateFormatter";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { format } from "date-fns";

export default function DatePicker({ keyName, setUserInput }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [dateValue, setDateValue] = useState("dd/mm/yyyy");
  const [timeValue, setTimeValue] = useState("h:mm a");

  const onChangeDateHandler = (event, selectedDate) => {
    setShowDatePicker(false);
    if (event.type === "set") {
      const formattedDate = fromatInputDate(selectedDate);
      setDateValue(formattedDate);
      setUserInput((prev) => ({
        ...prev,
        [keyName]: selectedDate,
      }));
    }
  };

  const onChangeTimeHanlder = (event, selectedTime) => {
    setShowTimePicker(false);
    if (event.type === "set") {
      console.log(selectedTime);
      const formattedTime = format(selectedTime, "h:mm a");
      setTimeValue(formattedTime);
    }
  };

  return (
    <View>
      <Text style={styles.label}>Date</Text>
      <View style={styles.container}>
        <Pressable
          style={styles.dateInput}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateValue}>{dateValue}</Text>
          <Entypo name="calendar" size={24} color="white" />
        </Pressable>
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={onChangeDateHandler}
          />
        )}
        <Pressable
          style={styles.dateInput}
          onPress={() => setShowTimePicker(true)}
        >
          <Text style={styles.dateValue}>
            {timeValue} <Text style={{ color: "grey" }}>(optional)</Text>
          </Text>
          <Entypo name="clock" size={24} color="white" />
        </Pressable>
        {showTimePicker && (
          <DateTimePicker
            value={new Date()}
            mode="time"
            display="default"
            onChange={onChangeTimeHanlder}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  label: {
    fontSize: 18,
    color: "white",
  },
  dateInput: {
    backgroundColor: Colors.bgDark,
    borderRadius: 6,
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: "#757575",
  },
  dateValue: {
    color: "white",
    fontSize: 16,
  },
});
