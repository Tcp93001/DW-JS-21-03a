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

for (let contador = 2; contador <= 100; contador++) {
  let esPrimo = false;

  for (let i = 2; i <= contador; i++) {
    if (contador % i !== 0 && i === contador) {
      esPrimo = true
    }
  }

  if (esPrimo) {
    console.log(contador)
  }
}
