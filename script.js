// Tab switching logic
const tabButtons = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.section');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and sections
    tabButtons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    // Add active class to clicked button and corresponding section
    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

// To Do List functionality
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage on page load
window.onload = function() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(taskText => {
    addTaskToDOM(taskText);
  });
};

// Add task on button click
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  addTaskToDOM(taskText);
  saveTask(taskText);
  taskInput.value = '';
  taskInput.focus();
});

// Add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});

// Function to add task to DOM
function addTaskToDOM(taskText) {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  // Delete event
  deleteBtn.addEventListener('click', () => {
    li.remove();
    removeTask(taskText);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Save task to localStorage
function saveTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task from localStorage
function removeTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
