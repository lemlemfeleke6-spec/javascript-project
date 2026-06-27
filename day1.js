 let taksInput=document.getElementById("taskInput");
 let addBtn=document.getElementById("addBtn");
 let taskList=document.getElementById("taskList");
 
 addBtn.addEventListener("click",function(){
    let taskText=taskInput.value;
    let li=document.createElement("li");
    li.textContent=taskText;
    taskList.appendChild(li);
 });