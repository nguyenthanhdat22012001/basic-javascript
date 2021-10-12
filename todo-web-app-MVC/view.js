




export function showTasks(parent,tasks) {
    parent.innerHTML = '';
    tasks.forEach(task =>{
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.innerHTML = `
            ${task.text} 
            <a class="right btn remove"> <i class="fa fa-remove"></i> </a>
            <a class="right btn edit"> <i class="fa fa-edit"></i> </a>
        `;
        li.querySelector('.remove').setAttribute('data-id',task.id)
        li.querySelector('.edit').setAttribute('data-id',task.id)
        parent.appendChild(li);
    })
}


export function showOneTaskOnInput(input,task){
    input.focus();
    input.value = task.text;

    const btnAddTask = document.querySelector('#add-new-task');
    const btnEditTask = document.querySelector('#edit-task');

    if(btnEditTask != null){
        removeBtn(btnEditTask);
    }
    
    // create btn edit
    const btnEdit = document.createElement('button');
    btnEdit.className = 'btn';
    btnEdit.id = 'edit-task';
    btnEdit.innerHTML = 'Edit Task';
    btnEdit.setAttribute('data-id',task.id);

    btnAddTask.after(btnEdit);
}

export function removeBtn(btn){
    btn.remove();
}
