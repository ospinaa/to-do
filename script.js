const input = document.getElementById("tareaInput");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");

botonAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {
    const textoTarea = input.value;

    if (textoTarea === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = textoTarea + " ";

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(botonEliminar);
    lista.appendChild(li);

    input.value = "";
}
