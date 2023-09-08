let producto1 = { nombre: "Modelo PastaLinda", precio: 10, categoria: "A" };
let producto2 = { nombre: "Modelo Silla", precio: 20, categoria: "A" };
let producto3 = { nombre: "Modelo Auto", precio: 30, categoria: "B" };
let producto4 = { nombre: "Modelo Parlantes", precio: 40, categoria: "B" };

let carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
}

function calcularTotalCarrito() {
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  return total;
}

function calcularTotalProducto() {
  let nombres = "";
  for (let i = 0; i < carrito.length; i++) {
    if (i > 0) {
      nombres += ", ";
    }
    nombres += carrito[i].nombre;
  }
  return nombres;
}

function filtrarProductosPorCategoria(categoria) {
  return [producto1, producto2, producto3, producto4].filter(producto => producto.categoria === categoria);
}

function mostrarProductosFiltrados(productosFiltrados) {
  let opciones = "";
  for (let i = 0; i < productosFiltrados.length; i++) {
    opciones += (i + 1) + ". " + productosFiltrados[i].nombre + " - $" + productosFiltrados[i].precio + "\n";
  }
  return opciones;
}

function interaccionUsuario() {
  let categoriaSeleccionada = prompt("Elige la categoría de productos que deseas ver (A o B):");

  if (categoriaSeleccionada !== "A" && categoriaSeleccionada !== "B") {
    alert("Debes seleccionar una categoría válida (A o B).");
    return;
  }

  let productosFiltrados = filtrarProductosPorCategoria(categoriaSeleccionada);

  if (productosFiltrados.length === 0) {
    alert("No hay productos en la categoría seleccionada.");
    return;
  }

  while (true) {
    let opciones = mostrarProductosFiltrados(productosFiltrados);
    let seleccion = parseInt(prompt(
      "Elige un número de producto:\n" +
      opciones +
      "Ingrese '0' para finalizar la selección"
    ));

    if (seleccion === 0) {
      break;
    }

    if (seleccion >= 1 && seleccion <= productosFiltrados.length) {
      agregarAlCarrito(productosFiltrados[seleccion - 1]);
    } else {
      alert("Debes seleccionar un número entre 1 y " + productosFiltrados.length);
    }
  }

  let opcion = prompt("¿Deseas añadir un nuevo producto? (si/no)");

  if (opcion.toLowerCase() === "no") {
    let totalCarrito = calcularTotalCarrito();
    let nombresProductos = calcularTotalProducto();

    alert("Productos seleccionados: " + nombresProductos + "\nEl total de tu compra es: $" + totalCarrito);
  } 
  else if (opcion.toLowerCase() === "si") {
    
    interaccionUsuario();
  } 
  else {
    alert("Debes seleccionar si o no");
  }
}

interaccionUsuario();