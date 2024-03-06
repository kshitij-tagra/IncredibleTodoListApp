import React from "react";
import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";

export default function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {tasks.map((item) => {
        return (
          <Pressable>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>{item}</Text>
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});
