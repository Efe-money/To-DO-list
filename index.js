first=document.getElementById('task')
tasklists=document.getElementById('display')
 

let lst=[]


function input(){
    lst.push(first.value)
    display()
    
}
function clearInput(){
    first.value="";
}
function display(){
    tasklists.innerHTML =''
    lst.forEach((elem, i) => {
        tasklists.innerHTML += ` 
     <div class="container justify-content-center col-md-6">
      <div class"row ">
    <form class="form-control shadow-sm rounded-3 ">
    <div class="d-flex justify-content-center gap-3">
    <span>${elem}</span>
    <div class="align-items-center ">
       <button class="bg-danger text-white rounded-1  border-0" onclick="edit(${i})">Edit</button>
    </div>
     <button class="bg-success text-white rounded-1 border-0" onclick="del(${i})">Delete</button>
    </div>
    </form>
      </div>
    </div>`        
    })
}
function del(i){
    lst.splice(i, 1)
    display()
}
function edit(i) {
    let newTask = prompt("Enter new task");
    if (newTask !== "") {
      lst[i] = newTask;
      display();
    }
  }
  
