
function minisculas(arr) {

  let nuevoArr = [];

  for(let i = 0; i < arr.length; i++) {
    nuevoArr.push(arr[i].toLowerCase());
  }
  //retorna
  return nuevoArr;
}
let palabras = ["ESTAS PALABRAS VAN EN MINISCULAS"];
let palabrasEnMinusculas = minisculas(palabras);
console.log(palabrasEnMinusculas); 

