"use client";
import SwipeableTemporaryDrawer from "@/Components/Drawer/SwipeableTemporaryDrawer";
import ToDoItem from "@/Components/ToDoList/ToDoItem";
import { todo } from "node:test";
import { useState } from "react";

interface todoItem {
  toDoText: string;
}

export default function TodoList() {
  const [toDoText, setToDoText] = useState<string>("");
  const [toDoItems, settoDoItems] = useState<todoItem[]>([{ toDoText: "222" }]);

  const onChange = (e: any) => {
    setToDoText(e.target.value);
  };

  const addItem = (e: any) => {
    e.preventDefault();
    let userText: string = e.target.value;
    let newToDoItem: todoItem = { toDoText: toDoText };
    settoDoItems([...toDoItems, newToDoItem]);
    setToDoText("");
  };

  return (
    <>
      <form>
        <input
          value={toDoText}
          onChange={(e) => setToDoText(e.target.value)}
        ></input>{" "}
        <button type="submit" onClick={addItem}>
          Add Item
        </button>
      </form>
      {toDoItems.map((element, index) => {
        return <ToDoItem userText={element.toDoText}></ToDoItem>;
      })}
    </>
  );
}
