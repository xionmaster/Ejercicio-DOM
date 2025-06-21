
//Listas
let numeros = [1, 2, 3, 4, 5]; 

let frutas = ["manzana", "naranja", "plátano"];
// valor en primera posición

let primeraFruta = frutas[0];

// añadir elemento al final del arreglo

frutas.push("uva");

//Crear tareas

let tareas = []; 

function crearTarea(nombre, descripcion) { 

  let nuevaTarea = { 

    id: Date.now(), 

    nombre: nombre, 

    descripcion: descripcion, 

    completada: false 

  }; 

  tareas.push(nuevaTarea); 

}

//Leer tareas
function leerTareas() { 

    return tareas; 
  
  } 

//Actualizar tareas

function actualizarTarea(id, datosActualizados) { 

    let tarea = tareas.find(t => t.id === id); 
  
    if (tarea) { 
  
      Object.assign(tarea, datosActualizados); 
  
    } 
  
  }

  //Eliminar tareas

  function eliminarTarea(id) { 

    tareas = tareas.filter(t => t.id !== id); 
  
  }

  