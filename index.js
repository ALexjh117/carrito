const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
const contadorCarrito = document.getElementById('contador-carrito');
const modalCarrito = document.getElementById('modal-carrito');
const botonCerrarCarrito = document.getElementById('cerrar-carrito');
const listaItemsCarrito = document.getElementById('items-carrito');
const botonComprar = document.getElementById('comprar');

let carrito = [];

function actualizarContador() {
  // Actualiza el contador de artículos en el carrito
  contadorCarrito.textContent = carrito.length + ' artículos en el carrito';
}

function agregarProductoAlCarrito(producto) {
  carrito.push(producto);
  actualizarContador();
}

function eliminarProductoDelCarrito(index) {
  // Crear un nuevo array excluyendo el producto que se desea eliminar
  let nuevoCarrito = [];
  for (let i = 0; i < carrito.length; i++) {
    if (i !== index) {
      nuevoCarrito.push(carrito[i]);
    }
  }
  carrito = nuevoCarrito; // Asignamos el nuevo carrito sin el producto eliminado
  actualizarContador(); // Actualizamos el contador
  mostrarCarrito(); // Mostramos el carrito actualizado
}

function mostrarCarrito() {
  listaItemsCarrito.innerHTML = '';  // Limpiamos el contenido del carrito
  for (let i = 0; i < carrito.length; i++) {
    const li = document.createElement('li');
    li.textContent = carrito[i].nombre;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = function() {
      eliminarProductoDelCarrito(i);  // Llamamos a la función de eliminar cuando el usuario hace clic
    };

    li.appendChild(botonEliminar);
    listaItemsCarrito.appendChild(li);
  }
  modalCarrito.style.display = 'flex';  // Muestra el modal con el carrito
}

function cerrarCarrito() {
  modalCarrito.style.display = 'none';  // Cierra el modal del carrito
}

function comprar() {
  alert('Compra realizada');
  carrito = [];  // Vacía el carrito
  actualizarContador();  // Actualiza el contador de artículos
  modalCarrito.style.display = 'none';  // Cierra el modal del carrito
}

for (let i = 0; i < botonesAgregarCarrito.length; i++) {
  botonesAgregarCarrito[i].onclick = function() {
    const productoElemento = botonesAgregarCarrito[i].parentNode;
    const nombreProducto = productoElemento.querySelector('h2').textContent;

    agregarProductoAlCarrito({ nombre: nombreProducto });
  };
}

document.getElementById('ver-carrito').onclick = mostrarCarrito;
botonCerrarCarrito.onclick = cerrarCarrito;
botonComprar.onclick = comprar;

document.body.style.backgroundImage = 'url("img/fondo.jpg")';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center center';
document.body.style.backgroundAttachment = 'fixed';
