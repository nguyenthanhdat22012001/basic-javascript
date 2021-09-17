
const key = 'tasks';

function validateArray(array) {
    if(Array.isArray(array) ){
        return array;
    }
    throw new Error(`${array} is type ${typeof array}, not string`);
}

function saveTask(tasks) {
    localStorage.setItem(key, JSON.stringify(tasks));
}

export function addNewTask(value) {
    const tasks = getAllTasks();
    const id = Math.round(Math.random() * 1000);
    const task = { id: id, text: value };
    tasks.push(task);
    saveTask(tasks);
}

 function sortTask(array){
    return array.sort((a,b) => b.id - a.id);
 }

export function getAllTasks() {
    try {
        const str = localStorage.getItem(key);
        const items = JSON.parse(str);
        if (Array.isArray(items)) {
            return sortTask(items);
        }
        console.log('invalid data', str);
        return [];
    } catch (e) {
        return [];
    }
}

export function searchTask(text) {
   const tasks = getAllTasks();
   let filterTask = tasks.filter((item) => item.text.includes(text));
   return filterTask;
}

export function getTaskById(id) {
    const tasks = getAllTasks();
    const task = tasks.find(item => item.id == id);
    return task;
}

export function updateTaskById(id,text) {
    let tasks = getAllTasks();
    tasks.forEach(item =>{
        if(item.id == id){
            item.text  = text;
        }
    })

    saveTask(tasks);
}

export function deleteTask(id) {
    const tasks = getAllTasks();
    const fillterTasks = tasks.filter(item => item.id != id)
    saveTask(fillterTasks);
}

export function deleteAllTask() {
    saveTask([]);
}