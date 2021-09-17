import * as view from './view.js';
import * as model from './model.js';

// add task
const InputNewTask = document.getElementById('new-task');

function showTasksOnBrowser() {
    const tasks = model.getAllTasks();
    view.showTasks(tasks,model.deleteTask);
}
showTasksOnBrowser();

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