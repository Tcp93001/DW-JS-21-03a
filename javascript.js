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
// Ejercicios lección 6 
