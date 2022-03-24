//Seleccionar al nodo padre
const elementoPadre = document.querySelector('.padre');

//Crear el nodo hijo
const parrafoCuatro = document.createElement('p');
parrafoCuatro.innerHTML = 'Párrafo 4';

//Agregar el nodo hijo al padre
// elementoPadre.appendChild(parrafoCuatro);

//ELIMINAR

const parrafoUno = document.querySelector('#parrafo1');
const parrafoDos = document.querySelector('#parrafo2');
const parrafoTres = document.querySelector('#parrafo3');

//RemoveChild
elementoPadre.removeChild(parrafoUno);

//Remove
parrafoDos.remove();

//ReplaceChild
elementoPadre.replaceChild(parrafoCuatro, parrafoTres);

//EVENT LISTENERS
parrafoCuatro.addEventListener('click', ()=>{
    parrafoCuatro.innerHTML = 'Nuevo Texto';
});