import * as view from './view.js';
import * as model from './model.js';
import * as validates from './validates.js';


const InputNewTask = document.getElementById('new-task');
const InputSearch = document.querySelector('#search-task');
const ul = document.querySelector('ul');

// window.onload = ()=>{
//     showTasksOnBrowser(ul)
// };
document.addEventListener("DOMContentLoaded", function (e) {
    showTasksOnBrowser(ul);
});

function showTasksOnBrowser(parent,tasks) {
    if(!tasks){
        tasks = model.getAllTasks();
    }
    view.showTasks(parent, tasks);

    setTimeout(() => {
        deleteTask();
        editTask();
    }, 200);
}

/*********************************ADD TASK***********************************************/

function AddNewTaskFromInput() {
    let value = InputNewTask.value;

    const string = validates.validateSting(value);
    if (string.error) {
        alert(string.message);
    } else {
       const action = model.addNewTask(value);
       if(action.error == false){
            showTasksOnBrowser(ul);
            alert(action.message);
       }
        
    }
}

InputNewTask.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        AddNewTaskFromInput();
        InputNewTask.value = '';
    }
})

const btnAddTask = document.querySelector('#add-new-task');

btnAddTask.addEventListener('click', () => {
    AddNewTaskFromInput();
    InputNewTask.value = '';
});

/******************************Delete all**************************************************/

const btnDeleteAll = document.querySelector('#delete-all');

btnDeleteAll.addEventListener('click', () => {
    model.deleteAllTask();
    showTasksOnBrowser(ul);
});

/******************************search**************************************************/

function search() {
    let value = InputSearch.value;
    if (value.length < 1) {
        showTasksOnBrowser(ul);
    }
    const resultSearch = model.searchTask(value);
    showTasksOnBrowser(ul,resultSearch);
}

const btnSearchTask = document.querySelector('#btn-search-task');

btnSearchTask.addEventListener('click', () => {
    search();
})

/******************************delete task**************************************************/

const deleteTask = () => {
    const btnDelete = document.querySelectorAll('.remove');
    console.log(btnDelete)
    for (let index = 0; index < btnDelete.length; index++) {
        btnDelete[index].addEventListener('click', (e) => {
            console.log(e.target.getAttribute('data-id'))

            const id = e.target.getAttribute('data-id');
            const action = model.deleteTask(id);
            if(action.error == false){
                showTasksOnBrowser(ul);
                alert(action.message);
           }
        })
      
    }
}


/******************************edit task**************************************************/

const editTask = () => {
    const btnEdit = document.querySelectorAll('.edit');
    console.log(btnEdit);
    for (let i = 0; i < btnEdit.length; i++) {
        btnEdit[i].addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            const item = model.getTaskById(id);
            console.log(id);
             view.showOneTaskOnInput(InputNewTask, item);
             showTasksOnBrowser(ul);

            setTimeout(() => {
                updateTask();
            }, 0);
        })
    }
}

const updateTask = () => {
    const btnUpdate = document.getElementById('edit-task');
    console.log(btnUpdate);

    btnUpdate.addEventListener('click', (e) => {
        console.log('btn update')
        const id = e.target.getAttribute('data-id');
        let text = InputNewTask.value;
        const action =  model.updateTaskById(id, text);
        if(action.error == false){
            showTasksOnBrowser(ul);
            alert(action.message);
            view.removeBtn(btnUpdate);
            InputNewTask.value = '';
       }
    })
}







