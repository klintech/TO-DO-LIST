document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    let tasks = [];

    // Function to render tasks
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task}</span>
                <div>
                    <button class="edit-button" onclick="editTask(${index})">Edit</button>
                    <button onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }

    // Add task
    addTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            tasks.push(task);
            taskInput.value = '';
            renderTasks();
        }
    });

    // Edit task
    window.editTask = (index) => {
        const newTask = prompt('Edit task:', tasks[index]);
        if (newTask !== null) {
            tasks[index] = newTask;
            renderTasks();
        }
    };

    // Delete task
    window.deleteTask = (index) => {
        tasks.splice(index, 1);
        renderTasks();
    };
});