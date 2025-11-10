const inputBox = document.getElementsByClassName("detail");
const listContainer = document.getElementById("list-container");



function action() {
    let values = [];

    for (let i = 0; i < inputBox.length; i++) {
        values.push(inputBox[i].value);
    }

    if (values.some(v => v === "")) {
        alert("Fill all fields!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = values.map(v => `<span>${v}</span>`).join("");
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    for (let i = 0; i < inputBox.length; i++) {
        inputBox[i].value = "";
    }

    saveData();
}


listContainer.addEventListener("click",function(e){
    if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();