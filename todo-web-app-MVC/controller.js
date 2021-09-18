import * as view from './view.js';
import * as model from './model.js';

// add task
const InputNewTask = document.getElementById('new-task');
const InputSearch = document.querySelector('#search-task');

function showTasksOnBrowser() {
    const tasks = model.getAllTasks();
    view.showTasks(tasks);
    
    setTimeout(() => {
        editTask();
        deleteTask();
   }, 500);
}



function AddNewTaskFromInput(){
    let value = InputNewTask.value;
    if(value.length < 1 ){
        return;
    }
    model.addNewTask(value);
    showTasksOnBrowser();
}

InputNewTask.addEventListener('keypress',(e) =>{
    if(e.keyCode == 13){
        AddNewTaskFromInput();
        InputNewTask.value = '';
    }
})

const btnAddTask = document.querySelector('#add-new-task');

btnAddTask.addEventListener('click',()=>{
     AddNewTaskFromInput();
     InputNewTask.value = '';
});

const btnDeleteAll = document.querySelector('#delete-all');

btnDeleteAll.addEventListener('click',()=>{
    model.deleteAllTask();
    showTasksOnBrowser();
});



function search() {
    let value = InputSearch.value;
    if(value.length < 1 ){
        showTasksOnBrowser();
    }
  const resultSearch =  model.searchTask(value);
  view.showTasks(resultSearch);
}

const btnSearchTask = document.querySelector('#btn-search-task');

btnSearchTask.addEventListener('click',()=>{
     search();
})


const deleteTask = () =>{
    let btn = document.getElementsByClassName('remove');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click',(e)=>{
            const id = btn[i].getAttribute('data-id')
             model.deleteTask(id);
             showTasksOnBrowser();
        })   
    }
} 

const editTask = () =>{
    let btn = document.getElementsByClassName('edit');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click',(e)=>{
            const id = btn[i].getAttribute('data-id');
            const item = model.getTaskById(id);
            view.showOneTaskOnInput(InputNewTask,model.getTaskById(id));

            let update = setInterval(() => {
                updateTask();
                clearInterval(update);
           }, 500);
        })   
    }
}

const updateTask = ()=>{
    let btn = document.getElementById('edit-task');
    console.log(btn)
    btn.addEventListener('click',()=>{
        console.log('btn edit')
        const id = btn.getAttribute('data-id');
        let text = InputNewTask.value;
        model.updateTaskById(id,text);
        showTasksOnBrowser();
        view.removeBtn(btn);
        InputNewTask.value ='';
    })
}


setTimeout(() => {
    showTasksOnBrowser();
   
}, 500);




