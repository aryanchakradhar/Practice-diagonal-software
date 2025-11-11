const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const listContainer = document.getElementById("list-container");

let people = [];

function showTask() {
    const data = localStorage.getItem("people");
    if (data) {
        people = JSON.parse(data);
        console.log("Loaded from localStorage:", people); 
        people.forEach(person => addPersonToDOM(person));
    }
}

function addPersonToDOM(person) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${person.name}</span> <span>${person.age}</span> <span class="remove">\u00d7</span>`;
    listContainer.appendChild(li);
}

function addPerson() {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    if (!name || !age) {
        alert("Fill all fields!");
        return;
    }

    const person = { name, age };
    people.push(person); 
    console.log("After adding:", people);           
    addPersonToDOM(person);        

    localStorage.setItem("people", JSON.stringify(people)); 

    nameInput.value = "";      
    ageInput.value = "";
  
}

listContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("remove")) {
        const li = e.target.parentElement;
        const name = li.querySelector("span").textContent;

        people = people.filter(person => person.name !== name);
        console.log("After removing:", people);

        li.remove();

        localStorage.setItem("people", JSON.stringify(people));
    }
});

showTask(); 


