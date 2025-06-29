import {
  tasks,
  readLine,
  displayMenu,
  getUserChoice,
  displayTasks,
  deleteTask,
} from "./modules.js";

let isValid = true;
let userChoice;

do {
  displayMenu();
  userChoice = Number(getUserChoice());

  switch (userChoice) {
    case 1: {
      const taskName = readLine.question(
        "Please enter the task you want to add: "
      );
      tasks.push(taskName);
      console.log(`Task named: "${taskName}" has been added successfully.`);
      break;
    }
    case 2: {
      if (tasks.length === 0) {
        console.log("No tasks have been added yet, please add tasks first!");
      } else {
        console.log("Here are your tasks so far:\n");
        displayTasks();
      }
      break;
    }
    case 3: {
      const taskToDelete = readLine.question(
        "Enter the name of the task you want to delete: "
      );
      const taskIndex = tasks.indexOf(taskToDelete);
      if (taskIndex >= 0) {
        deleteTask(taskToDelete);
      } else {
        console.log(`Task "${taskToDelete}" not found.`);
      }
      break;
    }
    case 4:
      console.log("Exiting the application. Goodbye!");
      isValid = false;
      break;
    default:
      console.log(
        "Invalid choice, please only enter numbers between 1 and 4. Let's try again!\n"
      );
  }
} while (isValid);
