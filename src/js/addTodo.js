export const listNode = document.getElementById("list");
export function addTodo(value){
    const listItemNode = document.createElement('li');
    const itemButtonNode = document.createElement('button');
    const checkNode = document.createElement('input');
    checkNode.setAttribute("type", "checkbox");
    itemButtonNode.classList.add("remove-button");
    listItemNode.classList.add("listItem");
    listItemNode.innerHTML = value;
    listItemNode.prepend(checkNode);
    itemButtonNode.innerHTML = "delete";
    listItemNode.append(itemButtonNode);
    listNode.append(listItemNode);
    listNode.onchange = (event) => {
      const isChecked = event.target.checked;
      itemButtonNode.setAttribute("disabled", "disabled");
      listItemNode.classList.add("done");
      checkNode.setAttribute("disabled", "disabled");
    };
  }