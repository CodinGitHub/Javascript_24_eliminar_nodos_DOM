//Seleccionar al nodo padre
elementoPadre = document.querySelector('.padre');

//Crear el nodo hijo
parrafoCuatro = document.createElement('p');
parrafoCuatro.innerHTML = 'Párrafo 4';

//Agregar el nodo hijo al padre
elementoPadre.appendChild(parrafoCuatro)

//ELIMINAR

let parrafoUno = document.querySelector('#parrafo1');
let parrafoDos = document.querySelector('#parrafo2');

//RemoveChild
// elementoPadre.removeChild(parrafoUno);

//Remove
parrafoDos.remove();

//Replace
elementoPadre.replaceChild(parrafoDos, parrafoCuatro);


/*
btnBorrar = document.querySelector('button');

//Elimina elementos:

elementoPadre.removeChild(parrafoUno);


function erase(){
    // console.log(elementoPadre)
    elementoPadre.removeChild(parrafoUno);
}


btnBorrar.addEventListener('click', ()=>{
    
});

*/