function myfunction() {
    document.getElementById("demo").innerHTML = "Hello!!!!!"
}


let a = 0

function count() {
    a++;
    postMessage(a)
    setTimeout("count()", 100)
}
count()

onmessage = () => {
    let i = 0
    for (i = 0; i <= 10000000000; i++)
        postMessage(i)
}