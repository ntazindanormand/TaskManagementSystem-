document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('task-modal');
  const btn = document.getElementById('create-task-btn');
  const span = document.getElementsByClassName('close')[0];
  const form = document.getElementById('task-form');
  const tasksTable = document.getElementById('taskTableBody');
  const searchBar = document.getElementById('searchBar');
  const filterStatus = document.getElementById('filterStatus');
  const filterCategory = document.getElementById('filterCategory');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Show modal
  btn.onclick = () => {
    modal.style.display = 'block';
  };

  // Close modal
  span.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  // Load tasks from local storage
  loadTasks();

  // Handle form submission
  form.onsubmit = (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const dueDate = document.getElementById('due-date').value;

    const task = {
      id: Date.now(),
      title,
      description,
      category,
      dueDate,
      status: 'Incomplete'
    };

    tasks.push(task);
    saveTasksToLocalStorage(tasks);
    addTaskToTable(task);

    form.reset();
    modal.style.display = 'none';
  };

  function addTaskToTable(task) {
    const row = tasksTable.insertRow();
    row.setAttribute('data-id', task.id);

    row.insertCell(0).textContent = task.title;
    row.insertCell(1).textContent = task.description;
    row.insertCell(2).textContent = task.category;
    row.insertCell(3).textContent = task.dueDate;
    const statusCell = row.insertCell(4);
    statusCell.textContent = task.status;
    statusCell.className = task.status === 'Complete' ? 'status-complete' : 'status-incomplete';

    row.insertCell(5).innerHTML = `
      <button class="btn action ${task.status === 'Complete' ? 'revert' : 'complete'}" onclick="completeTask(${task.id})">
        ${task.status === 'Complete' ? 'Revert Status' : 'Complete'}
      </button>
      <button class="btn edit" onclick="editTask(${task.id})">
        <span class="material-symbols-outlined">edit</span>
      </button>
      <button class="btn delete" onclick="deleteTask(${task.id})">
        <span class="material-symbols-outlined">delete</span>
      </button>
    `;
  }

  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function loadTasks() {
    tasks.forEach(task => addTaskToTable(task));
  }

  window.completeTask = function(id) {
    tasks = tasks.map(task => {
      if (task.id === id) {
        task.status = task.status === 'Complete' ? 'Incomplete' : 'Complete';
      }
      return task;
    });
    saveTasksToLocalStorage(tasks);
    refreshTaskTable();
  };

  window.editTask = function(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
      document.getElementById('title').value = task.title;
      document.getElementById('description').value = task.description;
      document.getElementById('category').value = task.category;
      document.getElementById('due-date').value = task.dueDate;
      
      form.onsubmit = (e) => {
        e.preventDefault();
        task.title = document.getElementById('title').value;
        task.description = document.getElementById('description').value;
        task.category = document.getElementById('category').value;
        task.dueDate = document.getElementById('due-date').value;

        saveTasksToLocalStorage(tasks);
        refreshTaskTable();
        form.reset();
        modal.style.display = 'none';
      };

      modal.style.display = 'block';
    }
  };

  window.deleteTask = function(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasksToLocalStorage(tasks);
    refreshTaskTable();
  };

  function refreshTaskTable() {
    tasksTable.innerHTML = '';
    tasks.forEach(task => addTaskToTable(task));
  }

  // Search functionality
  searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(query));
    applyFilters(filteredTasks);
  });

  // Filter by status functionality
  filterStatus.addEventListener('change', () => {
    applyFilters();
  });

  // Filter by category functionality
  filterCategory.addEventListener('change', () => {
    applyFilters();
  });

  function applyFilters(filteredTasks = tasks) {
    const status = filterStatus.value;
    const category = filterCategory.value;

    filteredTasks = filteredTasks.filter(task => 
      (status ? task.status === status : true) &&
      (category ? task.category === category : true)
    );

    displayFilteredTasks(filteredTasks);
  }

  function displayFilteredTasks(filteredTasks) {
    tasksTable.innerHTML = '';
    filteredTasks.forEach(task => addTaskToTable(task));
  }
});

