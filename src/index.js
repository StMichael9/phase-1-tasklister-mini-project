document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const task = taskInput.value;

    buildToDo(task);

    form.reset();
  });
});

function buildToDo(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const list = document.getElementById("tasks");
  list.appendChild(li);
}
