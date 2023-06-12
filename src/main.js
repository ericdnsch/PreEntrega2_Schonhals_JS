
let producto1 = { nombre: "Modelo PastaLinda", precio: 10 };
let producto2 = { nombre: "Modelo Silla", precio: 20 };
let producto3 = { nombre: "Modelo Auto", precio: 30 };
let producto4 = { nombre: "Modelo Parlantes", precio: 40 };

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


// console.log("Selecciona los productos para agregar al carrito:");
// console.log("1. " + producto1.nombre + " - $" + producto1.precio);
// console.log("2. " + producto2.nombre + " - $" + producto2.precio);
// console.log("3. " + producto3.nombre + " - $" + producto3.precio);
// console.log("4. " + producto4.nombre + " - $" + producto4.precio);


function main() {
  while (true) {
    let seleccion = parseInt(prompt(
      "Elige un número de producto:\n" +
      "1. " + producto1.nombre + " - $" + producto1.precio + "\n" +
      "2. " + producto2.nombre + " - $" + producto2.precio + "\n" +
      "3. " + producto3.nombre + " - $" + producto3.precio + "\n" +
      "4. " + producto4.nombre + " - $" + producto4.precio + "\n" +
      "Ingrese '0' para finalizar la selección"
    ));

    if (seleccion === 0) {
      break;
    }

    if (seleccion >= 1 && seleccion <= 4) {
      
      switch (seleccion) {
        case 1:
          agregarAlCarrito(producto1);
          break;
        case 2:
          agregarAlCarrito(producto2);
          break;
        case 3:
          agregarAlCarrito(producto3);
          break;
        case 4:
          agregarAlCarrito(producto4);
          break;
      }

    
      let opcion = prompt("¿Deseas añadir un nuevo producto? (si/no)");

      if (opcion.toLowerCase() === "no") {
        
        let totalCarrito = calcularTotalCarrito();
        let nombresProductos = calcularTotalProducto();

        
        alert("Productos seleccionados: " + nombresProductos + "\nEl total de tu compra es: $" + totalCarrito);
        break;
      }
    } else {
      alert("Debes seleccionar si o no");
    }
  }
}

main();