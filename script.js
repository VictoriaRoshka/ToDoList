let username = prompt ("Введите ваше имя:")
let myTitle = document.getElementById("title")
myTitle.innerHTML = "Ваш список дел " + username + ":"

if (username) {
    myTitle.innerHTML = "Ваш список дел" + "," + " " + username + ":"}
else {
    myTitle.innerHTML = "Ваш список дел" + "," + " " + "анонимный пользователь" + ":"
}
function addList(){

    let myBox = document.getElementById("list-box")
    let myInput = document.getElementById("input")
    let myButton = document.getElementById("button")
    let myList = document.getElementById("list")
    
    let value = myInput.value
    
    myBox.innerHTML = myBox.innerHTML + "<ul>" +"<li>" + value + "</li>" + "</ul>"
    
    
    
}





