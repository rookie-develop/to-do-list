function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  // Get the task text and create new list item
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  // Append the task to the task list and reset the input
  taskList.appendChild(li);
  taskInput.value = "";
}

function deleteTask(button) {
  const li = button.parentElement;
  li.classList.add("deleting"); // Add delete animation class
  li.addEventListener("animationend", () => {
    li.remove(); // Remove task item after animation ends
  });
}
