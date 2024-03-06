import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

export default function App() {
  const [tasks, setTasks] = useState(["Do Laundry", "Go to gym", "Walk dog"]);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}
