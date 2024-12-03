const inputTask = document.getElementById("inputtask")
const addButton = document.getElementById("addbtn")
const taskList = document.getElementById("tasklist")


function addTask() {

    const task = inputTask.value.trim();

    if (inputTask.value == "") {
        alert("Please Enter A Task");
    } else {
        createElement(task);
        inputTask.value = ""
        saveTask()
    }
}

addButton.addEventListener("click", addTask)



function createElement(task) {

    const listItem = document.createElement("li")
    listItem.innerHTML = task
    taskList.appendChild(listItem)

    const deleteTask = document.createElement("span")
    deleteTask.innerHTML = '<i class="fa-solid fa-trash"></i>'
    listItem.appendChild(deleteTask)

    deleteTask.addEventListener("click", () => {
        listItem.remove()
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
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(createElement)
}
getTask()
