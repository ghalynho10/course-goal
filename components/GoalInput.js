import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEntertedGoal] = useState("");

  const goalInputHandler = (enteredText) => setEntertedGoal(enteredText);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={props.addGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
