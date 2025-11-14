const table = document.querySelector("table");

async function tableData() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        console.log(data);
        if (data){
            data.forEach(item => {
                console.log(item.userId, item.title);
                rowAdd(item);
            });
        }
    }catch(error){
        console.log("data not found");
    }
}

function rowAdd(item){
    let sign;
    if (item.completed === true){
        sign = "\u2713";
    }else{
        sign = "\u2716";
    }
    let row = document.createElement("tr");
    row.innerHTML =   `<td>${item.userId}</td> <td> ${item.id}</td> <td>${item.title} </td> <td>  ${item.completed}</td> <td>  ${sign}</td> `;
    table.appendChild(row);
}
  
tableData();