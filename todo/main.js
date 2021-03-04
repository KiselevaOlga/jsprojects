let addNewTask = document.getElementById("add_task");
let taskText = document.getElementById("task_text");
// let itemList = document.getElementById("my_list");


addNewTask.addEventListener('click', function(){
    let addNew = document.createElement('li');
    addNew.innerHTML = taskText.value;
    document.getElementById("my_list").appendChild(addNew);
    taskText.value = '';
    addNew.addEventListener('click', function(){
        addNew.style.textDecoration = 'line-through'
    })
    addNew.addEventListener('dblclick', function(){
        addNew.style.backgroundColor = ''
    })
})


console.log('connected', document.getElementsByTagName('LI'));