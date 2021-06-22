// Ejercicios segunda sesion

// let greeting;
// let time = 20

// if (time >= 0 && time < 12) {
//   greeting = "Good morning";
// } else if (time >= 12 && time < 20) {
//   greeting = "Good afternoon";
// } else if (time >= 20 && time < 24) {
//   greeting = "Good evening";
// } else {
//   greeting = "Unknown hour";
// }

// console.log(greeting)

// let day = 0;
// let text;

// switch (day) {
//   case 0:
//     text = "Domingo"
//     break;
//   case 1:
//     text = "Lunes"
//     break;
//   case 2:
//     text = "Martes"
//     break;
//   case 3:
//     text = "Miércoles"
//     break;
//   case 4:
//     text = "Jueves"
//     break;
//   case 5:
//     text = "Viernes"
//     break;
//   case 6:
//     text = "Sábado"
//     break;
//   default:
//     text = "Error"
//     break;
// }

// console.log(text);

// let speed = 120;
// let message;

// if (speed > 100) {
//   message = "Vas muy rápido!"
// } else {
//   message = "Sigues las reglas de tránsito"
// }

// let message = 'falso' ? "Vas muy rápido!" : "Sigues las reglas de tránsito"

// console.log(message)
// for (let i = 0; i <= 9; i++) {

//   console.log("Hello world!" + i)

// }

// let j = 0;

// while(j <= 11) {
//   console.log('while ' + j)
// }

// console.log('termine')

// for (let i = 0; i <= 100; i++) {

//   if (i % 2 === 0) {
//     console.log(i)
//   }

// }

// for (let contador = 2; contador <= 100; contador++) {
//   let esPrimo = false;

//   for (let i = 2; i <= contador; i++) {
//     if (contador % i !== 0 && i === contador) {
//       esPrimo = true
//     }
//   }

//   if (esPrimo) {
//     console.log(contador)
//   }
// }


// Ejercicio de la sesión 3

// function calcularEdad(birthYear) {
//   let edad = 2021 - birthYear;
//   return edad;
// }

// const edadJuan = calcularEdad(1995)

// const edadPedro = calcularEdad(1964)

// console.log(edadJuan)
// console.log(edadPedro)

// function yearUntilRetirement(year, name) {
//   let age = calcularEdad(year);
//   let retirement = 65 - age;
//   console.log(name + ' retires in ' + retirement + ' years');
// }

// yearUntilRetirement(1995, 'Pedro')

// function power(base, exponent) {
//   let result = 1;

//   for(let i = 0; i < exponent; i++) {
//     // console.log('index', i)
//     result *= base
//     // console.log('resultado', result)
//   }

//   return result
// }

// let exponential = power(3, 5);

// console.log(exponential);

// const queHacesTu = function(job, name) {
//   switch(job) {
//     case 'developer':
//       return name + ' desarrolla aplicaciones chidas'
//     case 'designer':
//       return name + ' diseña sitios increibles'
//     case 'otro':
//       return name + ' no se esta divirtiendo como debe'
//     default:
//       return name + ' no esta en la fiesta del desarrollo'
//   }
// }

// console.log(queHacesTu('developer', 'Pedro'))
// console.log(queHacesTu('designer', 'Gabriela'))
// console.log(queHacesTu('', 'Patricia'))


// let factorial = function fac(number) {
//   return number < 2 ? 1 : number * fac(number - 1);
// }

// console.log(factorial(3))
// let name = "Pedro";

// (function nombre() {
//   let name = 'Juan'
//   console.log(name)
// })()

// console.log(name)
// function obtenerNumeroMayor(num1, num2) {

//   if (num1 > num2) {
//     return 'el numero mayor es: ' + num1;
//   } else if (num2 > num1) {
//     return 'el numero mayor es: ' + num2;
//   } else {
//     return 'Los numeros son iguales'
//   }
// }

// console.log(obtenerNumeroMayor(4, 2))

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
// function fibonacci(numero) {
//   if (numero <= 1) {
//     return 1;
//   }

//   return fibonacci(numero - 1) + fibonacci(numero - 2);
// }


// function fibonacciSequence(limit) {
//   if (limit < 1) return console.log('Limite debe ser mayor que 0')

//   for(let i = 0; i < limit; i++) {
//     console.log(fibonacci(i))
//   }
// }

// fibonacciSequence(11)

// function fibonacci(num){
//   let a = 1, b = 0, temp;

//   while (num >= 0) {
//     num--;
//     temp = a;
//     a = a + b;
//     b = temp;
//     console.log(b)
//   }

//   return b;
// }

// fibonacci(11)

//

// Ejercicios sesion 4 Arreglos y Objetos

// let numeros = [1, 3, 4, 7, 2, 1, 9, 0]  // Arreglo inicial

// function multiplicarPorDos(nums) {
//   let numerosMultiplicados = [];

//   for(let i = 0; i < nums.length; i++) {
//     numerosMultiplicados.push(nums[i] * 2)
//     // console.log(numerosMultiplicados)
//   }

//   return numerosMultiplicados;
// }

// console.log(numeros)


// console.log(multiplicarPorDos(numeros))  // [2, 6, 8, 14, 4, 2, 18, 0]  // Resultado esperado


// function promedio(nums) {
//   let suma = 0;

//   for(let i = 0; i < nums.length; i++) {
//     suma += nums[i]
//   }

//   return suma / nums.length
// }

// function promedioVersionA(nums) {
//   let suma = 0;

//   nums.map(elem => suma += elem)

//   return suma / nums.length
// }

// console.log('promedio de numeros', promedio(numeros))
// console.log('promedio de numeros', promedioVersionA(numeros))
// console.log('promedio de numerosPorDos', promedio(multiplicarPorDos(numeros)))

// let car = {
//   brand: 'Nissan',
//   model: 'Versa',
//   year: 2020
// }

// acceder al valor de una propiedad en un obbjeto
// metodo punto   car.model
// metodo con nombre  car['model']

// function keyValuePairs (informacionAuto) {
//   let keys = Object.keys(informacionAuto)
//   let pairs = []  // aqui voy a ir armando mi información de resultado

//   for(let i = 0; i < keys.length; i++) {
//     pairs.push([keys[i], informacionAuto[keys[i]]])
//   }

//   return pairs;
// }
//  [
//     ['brand', 'Nissan'], 
//     ['model', 'Versa'], 
//     ['year', 2020]
//   ] // resultado esperado

// console.log(keyValuePairs(car));




// function arrayToObject(arr) {
//   let objeto = {}

//   for( let i = 0; i < arr.length; i++) {
//     objeto[arr[i][0]] = arr[i][1]
//   }

//   return objeto
// }

// console.log(arrayToObject(keyValuePairs(car)))

// let conejo = {
//   alto: 25,
//   velocidad: 10,
//   color: 'blanco',
//   genero: 'hembra',
//   vertebrado: true,
//   come: function(comida) {
//     console.log('estoy comiendo ' + comida)
//   }
// }

// let juan = {
//   firstName: 'Juan',
//   lastName: 'Perez',
//   birthYear: 1990,
//   calculateAge: function() {
//     let today = new Date();
//     let year = today.getFullYear();

//     this.age = year - this.birthYear;
//   }
// }


// let singers = [
//   { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//   { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//   { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//   { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
// ];

// function pluck(list, propertyName) {
//   let values = []

//   for(let i = 0; i < list.length; i++) {
//     values.push(list[i][propertyName]);
//   }

//   return values;
// }

// console.log( pluck(singers, 'name') );
// // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

// console.log( pluck(singers, 'band') );
// // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

// console.log( pluck(singers, 'born') );
// // [1948, 1950, 1967, 1964]


// let singersGenero = [
//   { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//   { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//   { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//   { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
//   { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
//   { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
//   { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
//   'rock' // singersGenero[singerGenero.length - 1]
// ];


// function agregaGenero(list) {
//   let genero = []

//   for(let i = 0; i < list.length - 1; i++) {
//     list[i].genero = list[list.length - 1]
//     genero.push(list[i])
//   }

//   return genero;
// }

// console.log(agregaGenero(singersGenero))


// resultado
// [
//   { name: 'Steven Tyler', band: 'Aerosmith', born: 1948, genero: 'rock' },
//   { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950, genero: 'rock' },
//   { name: 'Kurt Cobain', band: 'Nirvana', born: 1967, genero: 'rock' },
//   { name: 'Chris Cornell', band: 'Soundgarden', born: 1964, genero: 'rock' },
// ];

//
// Ejercicios lección 6   **************************************
//
//

// let juan = {
//   name: 'Juan',
//   birthYear: 1990,
//   job: 'Developer'
// }

// let pedro = {
//   name: 'Pedro',
//   birthYear: 1985,
//   job: 'Developer'
// }

// let daniel = {
//   name: 'Daniel',
//   birthYear: 1995,
//   job: 'Developer'
// }

// let Persona = function(name, birthYear, job) {
//   this.name = name;
//   this.birthYear = birthYear;
//   this.job = job;
// }

// let juan = new Persona('Juan', 1990, 'Developer')
// let pedro = new Persona('Pedro', 1985, 'Contador')
// let daniel = new Persona('Daniel', 1985, 'MAestro')
// console.log(juan, pedro, daniel)

// let Vec = function(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Vec.prototype.plus = function(otroVector) {
//   return new Vec(this.x + otroVector.x, this.y + otroVector.y);
// }

// Vec.prototype.minus = function(otroVector) {
//   return new Vec(this.x - otroVector.x, this.y - otroVector.y);
// }

// Vec.prototype.length = function () {
//   return Math.sqrt(this.x * this.x + this.y * this.y);
// }

// let vec1 = new Vec(1, 2);
// let vec2 = new Vec(2, 3);

// console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
// console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
// console.log(vec1.length()); // 2.23606797749979

// console.log(vec2.plus(vec1)); // Vec { x: 3, y: 5 }
// console.log(vec2.minus(vec1)); // Vec { x: -1, y: -1 }
// console.log(vec2.length()); // 2.23606797749979

// let Persona = function(name) {
//   this.name = name;
// }


// let Developer = function(name, skills, yearsOfExperience) {
//   Persona.call(this, name)

//   this.skills = skills;
//   this.yearsOfExperience = yearsOfExperience;
// }

// let juan = new Developer('Juan', 'JAvascript', 10);
// let pedro = new Persona('Pedro')
// console.log(juan, pedro)

// let Group = function() {
//   this.members = [];
// }

// Group.prototype.has = function(valor) {
//   return this.members.includes(valor)
// }

// Group.prototype.add = function(valor) {
//   if(!this.has(valor)) {
//     this.members.push(valor)
//   }
// }

// Group.from = function(arreglo) {
//   let grupo = new Group();

//   for(let i = 0; i < arreglo.length; i++) {
//     grupo.add(arreglo[i])
//   }

//   return grupo;
// }

// let group = Group.from([1, 2, 3, 4, 5]);
// console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
// console.log(group.has(5)); // true
// console.log(group.has(10)); // false

// group.add(12);
// console.log(group.has(12)); // true

// let Persona = function(name, birthYear, job) {
//   this.name = name;
//   this.birthYear = birthYear;
//   this.job = job;
// }

// Persona.prototype.calculateAge = function() {
//   let today = new Date();
//   let year = today.getFullYear()

//   console.log(year -this.birthYear)
// }

// let juan = new Persona('Juan', 1990, 'Developer')
// let pedro = new Persona('Pedro', 1985, 'Contador')
// let daniel = new Persona('Daniel', 1960, 'MAestro')

// juan.calculateAge();
// pedro.calculateAge();
// daniel.calculateAge();

// console.log(juan, pedro, daniel)

// let Triangle = function(a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
// }

// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// }

// let triangle = new Triangle(5, 2, 3);

// console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
// console.log(triangle.getPerimeter()); // 6


// Ejercicios sesión 6
//
//

// let numbers = [1, 2, 3, 4, 5];
// // let doubles = [];

// // for(let i = 0; i < numbers.length; i++) {
// // 	doubles.push(numbers[i] * 2);
// // }

// let doubles = numbers.map(number => number * 2)


// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]

// let car = {
//   brand: 'Nissan',
//   model: 'Sentra',
//   year: 2020
// }


// console.log('Antes de agregar color: ', car);

// function addColor(automovil) {
//   let nuevoCarro = Object.assign({}, automovil, {
//     color: 'Negro'
//   })

//   return nuevoCarro;
// }

// let mismoCarro = addColor(car);

// console.log('eeste es el nuevo auto', mismoCarro)
// console.log('Es el mismo carro?, ', car === mismoCarro)

// let conejo = {
//   orejas: 2,
//   color: 'blanco',
//   tamaño: 'mediano',
//   herbivoro: true
// }

// console.log('Objeto que describe al conejo ', conejo)

// function agregarOrden(animal) {
//   return {...animal, mamifero: true}
// }

// let conejoModificado = agregarOrden(conejo);

// console.log('nuevo conejo ', conejoModificado)
// console.log('son iguales?? ', conejo === conejoModificado)

// let cart = [
//   {
//     item: 'Laptop',
//     quantity: 1
//   }
// ]

// function addItemToCart(cart, item, quantity) {
//   let newCart = cart.map(element => element)

//   newCart.push({
//     item: item,
//     quantity: quantity
//   })

//   return newCart;
// }

// cart = addItemToCart(cart, 'Phone', 1);
// console.log('segundo cart, ', cart);

// cart = addItemToCart(cart, 'Book', 2);
// console.log('tercer cart, ', cart);

// const suma = function(a, b) {
//   return a + b;
// }

// const promedio = suma(a, b) / 2;



let numbers = [1, 2, 3, 4, 5];
// let doubles = numbers.map(number => number * 2)

// let numerosImpares = numbers.filter(number => number % 2 !== 0)
// let numerosPares = numbers.filter(function(number) {
//   return number % 2 === 0;
// })
// let numerosMayoresATres = numbers.filter(number => number > 3)


// console.log(numbers); // [1, 2, 3, 4, 5]
// // console.log(doubles); // [2, 4, 6, 8, 10]
// console.log(numerosImpares);
// console.log(numerosPares);
// console.log(numerosMayoresATres);

// let suma = numbers.reduce(function(acumulador, valorActual) {
//   return acumulador + valorActual;
// }, 0)

// console.log(suma)

// let number = 12345;

// // let string = number.toString(); // '12345'

// // let array = string.split(''); // ['1', '2', '3', '4', '5']

// let array = number.toString().split(''); // ['1', '2', '3', '4', '5']

// let arrayOfNumbers = array.map(function(number) {
//   return Number(number)
// })   // [1, 2, 3, 4, 5]

// let suma = arrayOfNumbers.reduce(function(acum, elem) {
//   return acum + elem;
// }, 0);

// function sumaDigitos(number) {
//   return number
//           .toString()
//           .split('')
//           .map(Number)
//           .reduce(function(acum, elem) {
//             return acum + elem;
//           }, 0)
// };

// console.log('suma: ', sumaDigitos(number));

// function flatten(arrays) {
//   return arrays.reduce(function(acum, elem){
//     return acum.concat(elem);
//   }, []);
// }

// let arrays = [[1, 2, 3], [4, 5], [6]];
// let array = flatten(arrays);

// console.log(array); // [1, 2, 3, 4, 5, 6]

// function compact(array) {
//   return array.filter(elem => !!elem)
// }

// let array = [0, 1, false, 2, '', 3];
// let compactedArray = compact(array);

// console.log(compactedArray); // [1, 2, 3]

function loop(start, test, update, body) {
  for(let value = start; test(value); value = update(value)){
    body(value)
  }
}

let test = function(n) {
  return n > 0;
}

let update = function(n) {
  return n - 1;
}

loop(3, test, update, console.log);
// 3
// 2
// 1
