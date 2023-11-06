"use client";
import SwipeableTemporaryDrawer from "@/Components/Drawer/SwipeableTemporaryDrawer";
import ToDoItem from "@/Components/ToDoList/ToDoItem";
import { todo } from "node:test";
import { createContext, useContext, useState } from 'react';
import { SidebarContext } from "../providers";


interface todoItem {
  toDoText: string;
}

const ToDoItemsContext = createContext({value : 42});

export default function TodoList() {
  const [toDoText, setToDoText] = useState<string>("");
  const [toDoItems, settoDoItems] = useState<todoItem[]>([]);

  const myContext = useContext(SidebarContext);
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

  const deleteItem = (selectedElementIndex : Number ) => {
    settoDoItems(toDoItems.filter((element, index) => {
      return index !== selectedElementIndex
    }))
  }

  return (
    <>
    <ToDoItemsContext.Provider value = {{value: 46}}>
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
        return <ToDoItem key={index} deleteItem={deleteItem} userText={element.toDoText} index={index}></ToDoItem>;
      })}
      </ToDoItemsContext.Provider>
    </>
  );
}
