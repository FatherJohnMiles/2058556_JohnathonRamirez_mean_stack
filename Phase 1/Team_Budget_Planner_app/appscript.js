var arraySize = 0;



function addto () {
    

        var new_client = document.getElementById('ClientN').value;     
        var new_project = document.getElementById('ProjectN').value;
        var new_budget = document.getElementById('NBudget').value;

        enteredbudget = {cl:new_client, prj:new_project, budget:new_budget};
        
        if (sessionStorage.data){
           
           data = JSON.parse(sessionStorage.getItem('data'))
        }
        else {
          
            data = [];  
        }


        data.push(enteredbudget);
        arraySize++;
        console.log("the size is" +arraySize);
        sessionStorage.setItem("data", JSON.stringify(data));
        
     }
        
        


    




