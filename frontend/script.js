const API_URL = "http://localhost:5000/api/tasks";

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

let editTaskId = null;

// Fetch & display tasks
async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  taskList.innerHTML = "";

tasks.forEach(task => {
  const div = document.createElement("div");
  div.classList.add("task-card");

  div.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.description}</p>
    <span class="status ${task.status}">${task.status}</span>

    <div class="actions">
      <button class="edit-btn"
        onclick="editTask('${task._id}', '${task.title}', '${task.description}', '${task.status}')">
        Edit
      </button>
      <button class="delete-btn"
        onclick="deleteTask('${task._id}')">
        Delete
      </button>
    </div>
  `;

  taskList.appendChild(div);
});
}

// Add task
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Inputs
  const titleInput = document.getElementById("title");
  const descInput = document.getElementById("description");

  const title = titleInput.value.trim();
  const description = descInput.value.trim();
  const status = document.getElementById("status").value;

  // Error elements
  const titleError = document.getElementById("titleError");
  const descError = document.getElementById("descError");

  // Reset errors
  titleError.innerText = "";
  descError.innerText = "";
  titleInput.classList.remove("error-border");
  descInput.classList.remove("error-border");

  let isValid = true;

  // Title validation
  if (title.length < 3) {
    titleError.innerText = "Title must be at least 3 characters";
    titleInput.classList.add("error-border");
    isValid = false;
  }

  // Description validation
  if (description.length < 5) {
    descError.innerText = "Description must be at least 5 characters";
    descInput.classList.add("error-border");
    isValid = false;
  }

  // Stop if invalid
  if (!isValid) return;

  // CREATE or UPDATE
  if (editTaskId) {
    await fetch(`${API_URL}/${editTaskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, status })
    });

    editTaskId = null;
    taskForm.querySelector("button").innerText = "Add Task";
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, status })
    });
  }

  taskForm.reset();
  fetchTasks();
});

// Delete task
async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
  fetchTasks();
}

function editTask(id, title, description, status) {
  document.getElementById("title").value = title;
  document.getElementById("description").value = description;
  document.getElementById("status").value = status;

  editTaskId = id;
  taskForm.querySelector("button").innerText = "Update Task";
}


// Initial load
fetchTasks();
