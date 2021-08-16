

let data = sessionStorage.getItem("data")  /////gets data and shows whats in it 
console.log(data)
let cat = [];
cat = JSON.parse(data)
let total = 0
console.log(cat.length)

arraySize = cat.length;


           
            let plan = document.getElementById("updated") /////loop the array into table
            for (let i = 0; i < arraySize; i++) {
                console.log("loop "+i);
                let b_row = plan.insertRow(-1);
                b_row.innerHTML =  "<td>" + cat[i].cl + "</td>" + "<td>" + cat[i].prj+ "</td>" + "<td> $" + cat[i].budget + "</td>";
                plan.appendChild(b_row);

                total = total + Number(cat[i].budget)
                
            }
        document.write("<div><h3>Total Cost  "  +total+ "<h3></div>") //Displays the total cost of project