const express=require('express')
const app=express()
app.use(express.json())
const path=require('path')
const databasePath=path.join(__dirname,'todo.db')
const sqlite3=require('sqlite3')
const cors=require("cors")
app.use(cors())
const { open}=require('sqlite')
console.log(databasePath)

const { v4: uuidv4 } = require('uuid');


let db=null;
const initializeServerAndDatabase=async()=>{
    try{
        db=await open({
            filename:databasePath,
            driver:sqlite3.Database
        })
        app.listen(3001,()=>{
            console.log(`Server is running on 3001 PORT`)
        })
    }catch(error){
        console.log(`Database error: ${error.message}`)
        process.exit(1)
    }
}
initializeServerAndDatabase()

// GET all todos
app.get("/todos",async(request,response)=>{
    const getAllTodosQuery=`
    SELECT * FROM tasks;
    `
    const todos=await db.all(getAllTodosQuery)
    response.send(todos)
})


// Post new todo
app.post("/todos", async (request, response) => {
    const { task_id = uuidv4(), title, description, completed, created_at = new Date().toISOString() } = request.body;
    
    const createNewTaskQuery = `
    INSERT INTO tasks(task_id, title, description, completed, created_at)
    VALUES (?, ?, ?, ?, ?);
    `;

    const createTask = await db.run(createNewTaskQuery, [task_id, title, description, completed, created_at]);
    response.send("Added new task successfully");
});



// UPDATE todo
app.put("/todos/:taskId", async (request, response) => {
    const { taskId } = request.params;
    const { title, description, completed } = request.body;
  
    const updateTodoQuery = `
      UPDATE tasks
      SET title = ?,
          description = ?,
          completed = ?
      WHERE task_id = ?;
    `;
  
    const result = await db.run(updateTodoQuery, [title, description, completed, taskId]);
  
    if (result) {
      response.send("Todo Updated Successfully");
    } else {
      response.status(500).send("Failed to update the task");
    }
  });
  

// DELETE todo
app.delete("/todos/:taskId",async(request,response)=>{
    const {taskId}=request.params
    const deleteTaskQuery=`
    DELETE FROM tasks WHERE task_id= ?;
    `
    const deleteTask=await db.run(deleteTaskQuery,[taskId])
    response.send('Todo Deleted')
})