let username = prompt ("Введите ваше имя:")
let myTitle = document.getElementById("title")
myTitle.innerHTML = "Ваш список дел " + username + ":"

if (username) {
    myTitle.innerHTML = "Ваш список дел" + "," + " " + username + ":"}
else {
    myTitle.innerHTML = "Ваш список дел" + "," + " " + "анонимный пользователь" + ":"
}
function addList(){

    if (count < 5){
        addList
    }
    else {
      alert("Максимальное количество дел: 5")

    }

    let myBox = document.getElementById("list-box")
    let myInput = document.getElementById("input")
    let myButton = document.getElementById("button")
    let myList = document.getElementById("list")
    
    let value = myInput.value

    myList.innerHTML = myList.innerHTML + "<li>" + value + "</li>" 
    myInput.value = " "
    count = count + 1
}

let count = 0


