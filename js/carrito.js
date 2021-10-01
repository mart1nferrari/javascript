//array de obejots
const plantas = 
[
    {id: 0, nombre: "palmera", precio: 1200},
    {id: 1, nombre: "flores", precio: 100},
    {id: 2, nombre: "acuaticas", precio: 400},
    {id: 3, nombre: "bonsai", precio: 800},
    {id: 4, nombre: "bambu", precio: 1000},
    {id: 5, nombre: "cactus", precio: 450},
    {id: 6, nombre: "carnivora", precio: 1400}
];

//producto: creo el molde de lo que van a ser los productos que quiero agregar, en el array
class producto 
{
    constructor(objeto)
    {
        this.id = objeto.id;
        this.nombre = objeto.nombre;
        this.precio = objeto.precio;
    }
}

//agrego productos
const pino = new producto({ id: 7, nombre: "pinos", precio: 1500});
const rosas = new producto( { id: 8, nombre: "rosas", precio: 300});
plantas.push(pino);
plantas.push(rosas);



//creo mi array para agregar items al carrito de compras
let carrito = [];

const agregar = (nombreProducto) =>
{
    let producto = plantas.find( (producto) => producto.nombre == nombreProducto);

    if(producto)
    {
        carrito.push(producto);
    }
    else
    {
        console.log(" no contamos con ese producto ");
    }
}

// DOM al html con un for recorriendo el array de objetos
let plantasProducto = document.querySelector("#plantas")

for (const planta of plantas)
{
    let li = document.createElement("li");
    li.innerHTML = ` ${planta.nombre}: ${planta.precio}$`;
    plantasProducto.appendChild(li);
}

//guardo local Json

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

for (const planta of plantas)
{
    guardarLocal(planta.id, JSON.stringify(planta));
}








//prompt para que agregues el producto
/* let agregoProducto = prompt(" agregue el producto que quieras: ").toLocaleLowerCase(); */

/* agregar(agregoProducto);
console.log(carrito); */

