const taskForm =document.getElementById('create-task-form');
taskForm.addEventListener('submit', Submit); // runs the submit function 
// Function that  handles submissions of the form 
function Submit(event) {
  event.preventDefault(); // prevents default form submission
  // Get the user input from the text field and trim spaces by using the trim()
  const taskInput = document.getElementById('new-task-description');
  const taskDescription = taskInput.value.trim();
  // Creating a new task element in the
  const taskElement = document.createElement('li');
  taskElement.textContent = taskDescription;
  // Add the delete and edit funcionalities 
  addDeleteButton(taskElement);
  addEditFeature(taskElement);
  addPriorityDropdown(taskElement);
  addDueDateFeature(taskElement);
  //Apppending the new task element to the task list
  const taskList= document.getElementById('tasks')
  taskList.appendChild(taskElement);
}
//Adding delete button to the task element 
function addDeleteButton(taskElement){
  const deleteButton = document.createElement('button'); // cretes a new button with the tex delete in it
  deleteButton.textContent = 'Delete';
  
  deleteButton.addEventListener('click', () => taskElement.remove());    // removes tasks when   clicked

  taskElement.appendChild(deleteButton); //appends the delete button in  the  task  element
}
// Add an edit feature to each task 
function addEditFeature(taskElement){
const editButton = document.createElement('button');
editButton.textContent = 'Edit';

editButton.addEventListener('click', () => {    // when the edit button is clicked,the code inside the function will run
  const taskText = taskElement.textContent; // retrives task teext (taskele)&(taskcontent)
  const editInput = document.createElement('input'); // creates an input element to allow user to enter input
  editInput.type = 'text';
  editInput.value = taskText;

taskElement.replaceChild(editInput, taskElement.firstChild); // replaces the text with an input field
//an eventlistener for the blur event on the edit field 
editInput.addEventListener('blur',() => {
  // replace the edit input with a new updated text
  //the value of the edited input is retrived,creating a text node with that value
  taskElement.replaceChild(document.createTextNode(editInput.value),editInput) 
})
});
taskElement.appendChild(editButton);
}
  // Add ing a priority dropdown menu 
  function addPriorityDropdown(taskElement){
  const prioritySelect = document.createElement('select'); 
  prioritySelect.innerHTML = `
    <option value="low">Low</option>                
    <option value="medium">Medium</option>
    <option value="high">High</option>
  `;
  //a list of dropdown options 
  taskElement.appendChild(prioritySelect);
  }
  // Adding  a due date input field to each task
  function addDueDateFeature(taskElement){
  const dueDateInput = document.createElement('input'); 
  dueDateInput.type = 'date';
  taskElement.appendChild(dueDateInput);
}
// creating  the sort by priority  button 
const sortButton = document.createElement('button'); // creates a new sort button
sortButton.textContent = 'Sort by Priority';         
//Adding click event listener to sort the tasks by  their priorities
sortButton.addEventListener('click', () => {
  const tasks = Array.from(document.getElementById('tasks').children); // Converts the task in the list and convertes them into an array
  // sorting the tasks based on their priority 
  tasks.sort((a, b) => {
    let priorityA = a.querySelector('select').value;
    let priorityB = b.querySelector('select').value;

          //Returning a sorting order 
    if (priorityA === priorityB) return 0;
    if (priorityA === 'high') return -1;
    if (priorityB === 'high') return 1;
    if (priorityA === 'medium') return -1;
    return 1;
  });
  tasks.forEach((task) => {
    document.getElementById('tasks').appendChild(task);  
  });
});
//adding the sort  button 
document.getElementById('list').appendChild(sortButton)