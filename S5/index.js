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

function leerTareas() {
  return tareas;
}

function actualizarTarea(id, datosActualizados) {
  let tarea = tareas.find(t => t.id === id);
  if (tarea) {
    Object.assign(tarea, datosActualizados);
  }
}

function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
}

function mostrarTareas() {
  const lista = document.getElementById("listaTareas");
  lista.innerHTML = "";

  leerTareas().forEach(tarea => {
    const div = document.createElement("div");
    div.className = "tarea";
    if (tarea.completada) {
      div.classList.add("completada");
    }
    div.innerHTML = `
      <div>
        <strong>${tarea.nombre}</strong> - ${tarea.descripcion}
      </div>
      <div>
        <button onclick="toggleCompletada(${tarea.id})">
          ${tarea.completada ? "Marcar incompleta" : "Marcar completada"}
        </button>
        <button onclick="eliminarYActualizar(${tarea.id})">Eliminar</button>
      </div>
    `;
    lista.appendChild(div);
  });
}

function toggleCompletada(id) {
  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    actualizarTarea(id, { completada: !tarea.completada });
    mostrarTareas();
  }
}

function eliminarYActualizar(id) {
  eliminarTarea(id);
  mostrarTareas();
}

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("formTarea");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const nombre = document.getElementById("nombreTarea").value.trim();
    const descripcion = document.getElementById("descripcionTarea").value.trim();
    if (nombre && descripcion) {
      crearTarea(nombre, descripcion);
      form.reset();
      mostrarTareas();
    }
  });

  mostrarTareas();
});
