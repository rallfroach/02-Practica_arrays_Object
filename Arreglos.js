//1- Crea un array con al menos 5 elementos numericos

const arreglo = [30, 18, 87, 50, 25];
console.log(arreglo);



//2 Añadir un elemento al final del arreglo

arreglo.push(60);
console.log(arreglo);



//3 Elimina el primer elemento del array

arreglo.shift();
console.log(arreglo);



//4 Encontrar el indice de un elemento especifico

    //Metodo 1
console.log(arreglo);
const elementoBuscado = 25;

for (let i=0 ; i<arreglo.length; i++){
    if(arreglo[i] === elementoBuscado){
        console.log(`El valor buscado esta en la posicion ${i}`)
    }

}
    //Metodo 2

const posicion = arreglo.indexOf(25);
console.log(posicion);

    //Metodo 3
const posicionNew = arreglo.findIndex( valor => valor === 25);
console.log(posicionNew);




//5 usar el metodo map para crear un nuevo array donde cada elemento es el doble del original
const arregloDoble = arreglo.map( num => num *2);
console.log(arregloDoble);


//6 Arreglo con elementos mayores al primero
const mayorPrimero = arreglo.filter (num => num > arreglo[0]);
console.log(mayorPrimero);


//7 sumar elementos del arreglo

let total = 0;
const sumarArreglo = arreglo.reduce((total, valor ) => total+valor);
console.log(sumarArreglo);