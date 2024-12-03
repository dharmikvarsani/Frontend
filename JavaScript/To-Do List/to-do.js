let inputTask = document.getElementById("inputtask")
let addButton = document.getElementById("addbtn")
let taskList = document.getElementById("tasklist")


function addTask() {
    let task = inputTask.value.trim()

    if (inputTask.value == "") {
        alert("Please Enter A Task First.")
    } else {
        createElement(task)
        inputTask.value = ""
        saveTask()
    }
}

addButton.addEventListener("click", addTask)

function createElement(task) {
    let listItem = document.createElement("li")
    listItem.innerHTML = task
    taskList.appendChild(listItem)

    let deleteTask = document.createElement("span")
    deleteTask.innerHTML = '<i class="fa-solid fa-trash"></i>'
    listItem.appendChild(deleteTask)

    deleteTask.addEventListener("click", () => {
        listItem.remove()
        saveTask()
    })
}


function saveTask (){
    let tasks= [];
    taskList.querySelectorAll("li").forEach(function (list) {
        tasks.push(list.textContent.trim())
    })
    localStorage.setItem("task" , JSON.stringify(tasks))
}

function gettask(){
    let tasks = JSON.parse(localStorage.getItem("task"))
    tasks.forEach(createElement)
}
gettask()




//chatgpt biigginer level Question
//and biginer to advance lvl and some tricky question
//see how to use debugger