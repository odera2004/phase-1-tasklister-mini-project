document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const  taskDescription = document.getElementById("new-task-description").value;
     
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

     const deleteButton = document.createElement("button");
     deleteButton.textContent = "X";
     deleteButton.className = "delete-button";

     deleteButton.addEventListener('click', ()=> {
      taskList.removeChild(taskItem);
     });
     taskItem.appendChild(deleteButton);
     taskList.appendChild(taskItem);
    taskForm.reset();
  })
});