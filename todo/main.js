let addNewTask = document.getElementById("add_task");
let taskText = document.getElementById("task_text");

addNewTask.addEventListener('click', function(){
    let addNew = document.createElement('li');
    addNew.innerHTML = taskText.value;
    console.log('keys: ', Object.keys(taskText));
    document.getElementById("my_list").appendChild(addNew);
})

console.log('connected', addNewTask, Object.keys(taskText));