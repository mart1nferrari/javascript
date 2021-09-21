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
plantas.push(pino);

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

//prompt para que agregues el producto
/* let agregoProducto = prompt(" agregue el producto que quieras: ").toLocaleLowerCase(); */

agregar(agregoProducto);
console.log(carrito);

