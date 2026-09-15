const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", () => {
  if (input.value === "") return;

  const li = document.createElement("li");

  li.textContent = input.value;
  li.className = "bg-gray-100 p-2 mb-2 rounded cursor-pointer";

  li.addEventListener("click", () => {
    li.remove();
  });

  taskList.append(li);
  input.value = "";
});