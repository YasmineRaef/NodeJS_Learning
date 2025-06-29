import readlineSync from "readline-sync";

const tasks = [];

function displayMenu() {
  console.log("What would you like to do?");
  console.log("1. Add a task");
  console.log("2. View tasks");
  console.log("3. Delete a task");
  console.log("4. Exit");
}

function getUserChoice() {
  return readlineSync.question("Please enter your choice: ");
}

function displayTasks() {
  if (tasks.length === 0) {
    console.log("No tasks yet!");
    return;
  }
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

function deleteTask(taskName) {
  const taskIndex = tasks.indexOf(taskName);
  if (taskIndex === -1) {
    console.log(`Task "${taskName}" not found.`);
    return;
  }
  tasks.splice(taskIndex, 1);
  console.log(`Task "${taskName}" has been successfully deleted.`);
}

export {
  tasks,
  readlineSync as readLine,
  displayMenu,
  getUserChoice,
  displayTasks,
  deleteTask,
};
