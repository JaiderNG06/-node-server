const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];


function simulateAsyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000); 
  });
}

async function listarTareas() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.estado ? 'X' : ' '}] ${task.descripcion}`);
  });
}

async function agregarTarea() {
  return new Promise(async (resolve) => {
    rl.question('Ingrese la descripción de la tarea: ', async (descripcion) => {
      const nuevaTarea = {
        indicador: tasks.length + 1,
        descripcion,
        estado: false
      };
      tasks.push(nuevaTarea);
      console.log(`Tarea añadida: [${nuevaTarea.indicador}] ${nuevaTarea.descripcion}`);
      await simulateAsyncOperation(); 
      resolve();
    });
  });
}

async function eliminarTarea() {
  return new Promise(async (resolve) => {
    listarTareas();
    rl.question('Ingrese el indicador de la tarea a eliminar: ', async (indicador) => {
      const tareaEliminada = tasks.splice(indicador - 1, 1);
      console.log(`Tarea eliminada: [${tareaEliminada[0].indicador}] ${tareaEliminada[0].descripcion}`);
      await simulateAsyncOperation(); 
      resolve();
    });
  });
}

async function completarTarea() {
  return new Promise(async (resolve) => {
    listarTareas();
    rl.question('Ingrese el indicador de la tarea a completar: ', async (indicador) => {
      tasks[indicador - 1].estado = true;
      console.log(`Tarea completada: [${indicador}] ${tasks[indicador - 1].descripcion}`);
      await simulateAsyncOperation(); 
      resolve();
    });
  });
}

async function menuPrincipal() {
  console.log('\nSeleccione una opción:');
  console.log('1. Listar tareas');
  console.log('2. Agregar tarea');
  console.log('3. Eliminar tarea');
  console.log('4. Completar tarea');
  console.log('5. Salir');

  rl.question('Opción: ', async (opcion) => {
    switch (opcion) {
      case '1':
        await listarTareas();
        await menuPrincipal();
        break;
      case '2':
        await agregarTarea();
        await menuPrincipal();
        break;
      case '3':
        await eliminarTarea();
        await menuPrincipal();
        break;
      case '4':
        await completarTarea();
        await menuPrincipal();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción no válida. Intente de nuevo.');
        await menuPrincipal();
    }
  });
}


(async () => {
  await menuPrincipal();
  console.log('Programa finalizado.');
})();