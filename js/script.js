const addBtn = document.querySelector('#btn');
const tasksContainer = document.querySelector("#todoCards");
const taskCard = document.querySelector(".todoCard");
const count = document.querySelector('#count');
let nBTask = 1;
count.innerHTML = nBTask;

addBtn.addEventListener('click', addTask);

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function() {
    deleteTask(taskCard);
    delCount();
});

function addCount() {
    nBTask = nBTask + 1;
    count.innerHTML = nBTask;
}
function delCount() {
    nBTask = nBTask - 1;
    count.innerHTML = nBTask;
}


function deleteTask(task){
    task.remove();
}

function addTask(){
    const newTask = taskCard.cloneNode(true)
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')
    addCount();

    newTextArea.value = "New Task"
    newDelBtn.addEventListener('click', function() {
        deleteTask(newTask);
        delCount();
    });

    tasksContainer.appendChild(newTask)
}
