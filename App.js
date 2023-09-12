
const readlineSync = require('readline-sync');

let TaskList = [];
let nextItemId = 1;


function addTask(description){
    TaskList = [...TaskList,{id:nextItemId, description:description, completed:false}];
    nextItemId++;
}

function deleteTaskById(id){
    TaskList = TaskList.filter((x) => x.id !== id);
}

function markTastCompletedById(id){
    const index = TaskList.findIndex( task => task.id === id);
    if (index !== -1) TaskList[index].completed = true; else console.log("Task not found");
}

while (true){
    console.log(TaskList);
    console.log("Elija una opcion: \n 1-Agregar \n 2-Eliminar \n 3-Marcar Completo/Incompleto \n 4-Salir \n");
    const option = readlineSync.question('> ');
    let taskId;
    let taskDescription;

    if (option === '4') break;
    

    switch (option) {
        case '1':
            taskDescription = readlineSync.question('Ingrese descripcion de la tarea: ');
            addTask(taskDescription);
            break;
        case '2':
            taskId = readlineSync.question('Ingrese ID de la tarea a eliminar: ');
            deleteTaskById(parseInt(taskId));
            break;
        case '3':
            taskId = readlineSync.question('Ingrese ID de tarea a marcar completa:');
            markTastCompletedById(parseInt(taskId));
            break;
        default:
            console.log("Error, Intente de nuevo");
            //continue;
        
    }
}

console.log(TaskList);