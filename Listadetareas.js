const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function listarTareas() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.estado ? 'X' : ' '}] ${task.descripcion}`);
  });
}

function agregarTarea() {
  rl.question('Ingrese la descripción de la tarea: ', (descripcion) => {
    const nuevaTarea = {
      indicador: tasks.length + 1,
      descripcion,
      estado: false
    };
    tasks.push(nuevaTarea);
    console.log(`Tarea añadida: [${nuevaTarea.indicador}] ${nuevaTarea.descripcion}`);
    menuPrincipal();
  });
}

function eliminarTarea() {
  listarTareas();
  rl.question('Ingrese el indicador de la tarea a eliminar: ', (indicador) => {
    const tareaEliminada = tasks.splice(indicador - 1, 1);
    console.log(`Tarea eliminada: [${tareaEliminada[0].indicador}] ${tareaEliminada[0].descripcion}`);
    menuPrincipal();
  });
}

function completarTarea() {
  listarTareas();
  rl.question('Ingrese el indicador de la tarea a completar: ', (indicador) => {
    tasks[indicador - 1].estado = true;
    console.log(`Tarea completada: [${indicador}] ${tasks[indicador - 1].descripcion}`);
    menuPrincipal();
  });
}

function menuPrincipal() {
  console.log('\nSeleccione una opción:');
  console.log('1. Listar tareas');
  console.log('2. Agregar tarea');
  console.log('3. Eliminar tarea');
  console.log('4. Completar tarea');
  console.log('5. Salir');

  rl.question('Opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        listarTareas();
        menuPrincipal();
        break;
      case '2':
        agregarTarea();
        break;
      case '3':
        eliminarTarea();
        break;
      case '4':
        completarTarea();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción no válida. Intente de nuevo.');
        menuPrincipal();
    }
  });
}

menuPrincipal();