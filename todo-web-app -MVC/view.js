
const ul = document.querySelector('ul');

function validateArray(array) {
    if(Array.isArray(array) ){
        return array;
    }
    throw new Error(`${array} is type ${typeof array}, not string`);
}

export function showTasks(tasks,onRemove) {
    const arrTasks = validateArray(tasks);
    ul.innerHTML = '';
    arrTasks.forEach(task =>{
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.innerHTML = `
            ${task.text} 
            <a class="right btn remove"> <i class="fa fa-remove"></i> </a>
        `;
        li.id = task.id;
        li.querySelector('.remove').addEventListener('click', () => {
            li.remove();
            onRemove(li.id);
        });
        ul.appendChild(li);
    })
    // const li = document.createElement('li');
    // li.className = 'collection-item';
    // li.innerHTML = `
    //     ${task.text} 
    //     <a class="right btn remove"> <i class="fa fa-remove"></i> </a>
    // `;
    // li.id = task.id;
    // li.querySelector('.remove').addEventListener('click', () => {
    //     li.remove();
    //     onRemove();
    // });
    // ul.appendChild(li);
}

// export function clearAllItems() {
//     while (ul.children.length) {
//         ul.firstElementChild.remove();
//     }
// }