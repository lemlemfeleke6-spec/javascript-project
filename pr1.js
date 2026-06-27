let taskInput=document.getElementById("taskInput");
let taskBtn=document.getElementById("taskBtn");
let taskList=document.getElementById("taskList");

let tasks=[];
function createText(taskText){
}
taskBtn.addEventListener("click",function(){
    let taskText=taskInput.value;

     if(taskInput.value===""){
        alert("please enter the task");
        return;
    }
    
    tasks.push(taskText);
    console.log(tasks);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    function createTask(taskText){
        let li=document.createElement("li");
    li.textContent=taskText;
    // clear the input
    taskInput.value="";
    //mark completed
     li.addEventListener("click",function(){
        console.log("Task clicked");
        li.classList.toggle("completed");
        
    });
    // create delete button
    let deleteBtn=document.createElement("button");
    deleteBtn.textContent="delete";
    deleteBtn.classList.add("deleteBtn");
    // delete task 
    deleteBtn.addEventListener("click",function(event){

        event.stopPropagation();
        li.remove();
    });
    

    // add button to task
    li.appendChild(deleteBtn);
    // add task to list
    taskList.appendChild(li);
    }
    //enter keydown
taskInput.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
      taskBtn.click();
    }
});

let savedTasks=localStorage.getItem("tasks");
if(savedTasks){
    tasks=JSON.parse(savedTasks);
}
tasks.forEach(function(task){
    createTask(task);
});
});
