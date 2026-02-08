let myArray = [];
let counter = 0;
function add() {
    document.getElementById("p1").innerHTML = "";
    let item = document.getElementById("item1").value;
    if (item != "")
        myArray.push(item);
    document.getElementById("item1").value = "";
}
function display() {
    for (item of myArray) {
        counter++;
        document.getElementById("p1").innerHTML += `Element ${counter} = ${item} <br>`;
    }
    counter = 0;
}