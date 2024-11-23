let input = document.getElementById("inputtext")
let task = document.querySelector(".alltask")

function add(){
    if (input.value == ""){
        alert ("Please Enter A Task")
    }else {
        let newelement = document.createElement("ul");
        newelement.innerHTML= `${input.value} <i class="fa-solid fa-trash"></i>`;
        task.appendChild(newelement);
        input.value="";
        newelement.querySelector("i").addEventListener("click" , remove)
        function remove(){
            newelement.remove()
        }
    }
}