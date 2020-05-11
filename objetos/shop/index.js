const Cliente = require('./Cliente');
const Producto = require('./Producto');

let ipad = new Producto('ipad 16g',7000)
let iphone = new Producto('iphone',60000)
let cliente1 = new Cliente(1,'Edwin',27,'M','edwin@gmail.com',57004444)

cliente1.agregarCarrito(ipad)
cliente1.agregarCarrito(iphone)
console.log(cliente1.comprar())