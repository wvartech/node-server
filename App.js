
const readlineSync = require('readline-sync');

let TaskList = [];
let nextItemId = 1;


function addTask(description){

    return new Promise((resolve, reject) => {

    TaskList = [...TaskList,{id:nextItemId, description:description, completed:false}];
    nextItemId++;
    setTimeout(() => {
    const success = true;
    if (success){
        resolve('Task added successfully');
    }else{
        reject('There was an error creating the task');
    }},1000);
    });
}

function deleteTaskById(id){

    return new Promise((resolve, reject) => {
    length = TaskList.length;

    TaskList = TaskList.filter((x) => x.id !== id);
    const success = (TaskList.length !== length);

    setTimeout(() => {
        
        if (success){resolve('Task deleted successfully');}else{reject('There was an error');}
    },1000);
    });
}

function markTaskCompletedById(id){

    return new Promise((resolve, reject) => {

    const index = TaskList.findIndex( task => task.id === id);    
    setTimeout(() => {
        if (index !== -1) {
            TaskList[index].completed = true;
            resolve('Task marked completed successfully');}else{reject('Task not found.');}

    },1000);

    });
}

async function mainLoop(){

    while (true){
    console.log(TaskList);
    console.log("Elija una opcion: \n 1-Agregar \n 2-Eliminar \n 3-Marcar Completo \n 4-Salir \n");
    const option = readlineSync.question('> ');
    let taskId;
    let taskDescription;

    if (option === '4') break;
    

    switch (option) {
        case '1':
            taskDescription = readlineSync.question('Ingrese descripcion de la tarea: ');
            try{ await addTask(taskDescription).then(result => {console.log(result);}); }catch(error){ console.log(error);}
            break;
        case '2':
            taskId = readlineSync.question('Ingrese ID de la tarea a eliminar: ');
            try{ await deleteTaskById(parseInt(taskId)).then(result => {console.log(result);});}catch(error){ console.log(error)};
            break;
        case '3':
            taskId = readlineSync.question('Ingrese ID de tarea a marcar completa:');
            try {await markTaskCompletedById(parseInt(taskId)).then(result => {console.log(result)});}catch(error){ console.log(error)};
            break;
        default:
            console.log("Error, Intente de nuevo");
            //continue;
        
    }
    }
}

mainLoop();
