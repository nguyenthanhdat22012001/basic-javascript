
const key = 'tasks';



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

export function getAllTasks() {
    try {
        const str = localStorage.getItem(key);
        const items = JSON.parse(str);
        if (Array.isArray(items)) {
            return items;
        }
        console.log('invalid data', str);
        return [];
    } catch (e) {
        return [];
    }
}

export function deleteTask(id) {
    const tasks = getAllTasks();
    const fillterTasks = tasks.filter(item => item.id != id)
    saveTask(fillterTasks);
}

export function deleteAllTask() {
    saveTask([]);
}