"use strict";

import { isEmptyField } from "./isEmptyField";
import { listNode, addTodo } from "./addTodo";
import "../css/style.css";

const form = document.forms.todoList;
const { todoItem } = form;
const errorMessage = document.querySelector(".errorMessage");
const todoItemValue = document.getElementById("todoItemValue");
const addBtn = document.getElementById("addBtn");


form.onsubmit = (event) => {
  event.preventDefault();
  if (isEmptyField(todoItem)) {
    todoItem.classList.add("error");
    errorMessage.innerHTML = "Please, enter valid nickname";
      return;
    }
  else {
    addTodo(todoItemValue.value);
    todoItemValue.value = "";
  }
}

todoItem.oninput = () => {
  const isErrorField = todoItem.classList.contains("error");
  if (isErrorField) {
    todoItem.classList.remove("error");
    errorMessage.innerHTML = "";
  }
};

listNode.addEventListener("click", (event) => {
  const isRemoveButton = event.target.className === "remove-button";
  if (isRemoveButton) {
    const removeButton = event.target;
    const listTitleBlock = removeButton.closest(".listItem");
    listTitleBlock.remove();
  }
});