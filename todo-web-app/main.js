function validateString(str) {
    if(typeof str == 'string'){
        return str;
    }
    throw new Error(`${str} is type ${typeof str}, not string`);
}

const InputNewTask = document.getElementById('new-task');

InputNewTask.addEventListener('keypress',(e) =>{
    if(e.keyCode == 13){
        addTask(InputNewTask.value);
        InputNewTask.value = '';
    }
})

const ul = document.querySelector('ul');

//add task
function addTask(string){
    //create li tag
    const li = document.createElement('li');
    li.innerHTML = string;
    li.classList.add('collection-item');
    li.setAttribute('id', ul.children.length);
    //create btn delete
    const button = document.createElement('button');
    button.innerHTML = 'Delete';
    button.classList.add('btn','secondary-content');
    button.setAttribute('onclick', 'deleteTask(this)');

    li.appendChild(button);
    ul.appendChild(li);
}

const btnAddTask = document.querySelector('#add-new-task');

btnAddTask.addEventListener('click',()=>{
    addTask(InputNewTask.value);
     InputNewTask.value = '';
});


// clear all tasks
function deleteTask(e) {
   const li = e.parentElement;
    li.remove();
}



// clear all tasks
function deleteAll() {
    while (ul.children.length) {
        ul.children[0].remove();
     
    }
}

const btnDeleteAll = document.querySelector('#delete-all');

btnDeleteAll.addEventListener('click',deleteAll);