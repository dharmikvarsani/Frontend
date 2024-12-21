const inputTask = document.getElementById("inputtask")
const addButton = document.getElementById("addbtn")
const taskList = document.getElementById("tasklist")

function addTask() {
    let task = inputTask.value.trim()
    if (inputTask.value == "") {
        alert("Please Enter A Task First")
    } else {
        inputTask.value = ""
        createElement(task)
        saveTask()
    }
}

addButton.addEventListener("click", addTask)

function createElement(task) {
    let listItem = document.createElement("li")
    listItem.innerHTML = task
    taskList.appendChild(listItem)

    let deleteTask = document.createElement("span")
    deleteTask.innerHTML = `<i class="fa-solid fa-trash"></i>`
    listItem.appendChild(deleteTask)

    deleteTask.addEventListener("click", () => {
        listItem.remove();
        saveTask()
    })
}

function saveTask() {
    let tasks = []
    taskList.querySelectorAll("li").forEach(function (item) {
        tasks.push(item.textContent.trim())
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function getTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    tasks.forEach(createElement)
}
getTask()