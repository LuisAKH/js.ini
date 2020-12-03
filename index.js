
var modulo = require('./modules/module.js');
const Pessoa = require('./modules/objetos/Pessoa.js');
modulo.modulo();



const luis = new Pessoa(71,1.795);
console.log(luis.imc());
//ou
const felipe = new Pessoa();
felipe.peso = 100;
felipe.altura = 2;
console.log(felipe.imc());