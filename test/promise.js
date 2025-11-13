let p = new Promise ((resolve,reject) =>{
    let a =1 + 1;
    if (a == 2){
        resolve('success')
    }else {
        reject('Failed')
    }
})

p.then((message) =>{
    console.log('thus is the then' + message);
}).catch ((message) => {
    console.log('thid is the catch' +message);
})

let varia = "name";
// let n = name
function Employee(name,age){
    this.name = name;
    this.age = age;
}

const emp1 = new Employee("Aryan",71);
const emp2 = new Employee("Abhisekh",31);

console.log(emp1);
console.log(emp2);

console.log(emp1[varia]);
console.log(emp2[varia]);
console.log("I am printing "+ emp2[varia]);



function load(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        console.log(myObj);
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
    xhttp.send();
}

load();

let file = "https://jsonplaceholder.typicode.com/todos";

fetch(file)
.then(responseText => responseText.json())
.then(data => console.log(data))
.catch(error => console.log("error"));


async function file(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();  
      if (data){
            data.forEach(item => { 
            document.getElementById("demo").innerHTML += item.userId + item.id + item.title + item.completed  ;
            if (item.completed === true){
                document.getElementById("demo").innerHTML += "\u2713" +"<br>";
            }else{
                document.getElementById("demo").innerHTML += "\u2716" + "<br>";
            }
            });
        }
    } catch (error){
        console.log("error");
    }
}



  

file();

