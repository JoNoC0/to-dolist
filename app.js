// Get the input field, button and task list
const newTask = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
  // Get the value of the input field
  const taskText = newTask.value;

  // Create a new list item and append it to the task list
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <input type="checkbox">
    <span>${taskText}</span>
    <button class="delete-task">Delete</button>
  `;
  taskList.appendChild(listItem);

  // Reset the input field value
  newTask.value = "";

  // Add event listener to the delete button
  const deleteButton = listItem.querySelector(".delete-task");
  deleteButton.addEventListener("click", deleteTask);
}

// Function to delete a task
function deleteTask(event) {
  const listItem = event.target.parentNode;
  taskList.removeChild(listItem);
}

// Add event listener to the add task button
addTaskButton.addEventListener("click", addTask);
