let http = require("http")          //loading the module up
let url = require("url")
let fs = require("fs")

let newTask = [];

let taskpage =`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Tracker</title>
</head>
<body>
    <div>
        <h4>Add A Task</h4>
        <form action="addTask">
            <label>Employee ID:</label>
            <input type="text" name="empId"/><br/>
            <label>Task ID:</label>
            <input type="text" name="taskID"/><br/>
            <label>Task:</label>
            <input type="text" name="task"/><br/>
            <label>Deadline Date:</label>
            <input type="date" name="dDate"/><br/>
            <input type="submit" value="Add Task"/><br/>

        </form>
        

    </div>
    <hr>
        <h4>Delete Task</h4>
        <form action="deleteTask">
            <label>Task ID:</label>
            <input type="text" name="taskID"/>
            <input type="button" value="Delete Task">
        </form>
    </div>

    <hr>
    <div>
        <table id="taskTable" border="1">
            <tr>
                <th>Employee ID</th>
                <th>Task ID</th>
                <th>Task</th>
                <th>Deadline</th>
            </tr>
        </table>
    </div>
</body>
</html>

`
let server = http.createServer((request,response)=> {

    let urlInfo = url.parse(request.url,true);

        if(urlInfo.path!="/favicon.ico") {
            console.log(urlInfo)
            if(urlInfo.path=="/mytasktracker"){
                response.write("<b>Welcome to Task Tracker<b>");
                response.write(taskpage);
            }else if(urlInfo.pathname == "/addTask"){
                 userTask = urlInfo.query
                 let tasksearch = newTask.find(n=>n.taskID == userTask.taskID)
                 response.writeHead(200,{"content-type":"text/html"} );
                  if(tasksearch == undefined) {
                    
                newTask.push(userTask)
               
                 //let newTask = JSON.parse(fs.readFileSync("usersTasks.json").toString())
                
                 //fs.writeFileSync("usersTasks.json",JSON.stringify(newTask))
                
                
                response.write(taskpage)
                response.write("new task stored")
                console.log(newTask)

                  }else {
                    
                      response.write("Task ID must be unique");
                      response.write(taskpage)
                  }
            }else{
                response.write("page not found")
            }
        }
        response.end();
           
});


server.listen(9090,()=>console.log("My Task Server is running on port number 9090"))