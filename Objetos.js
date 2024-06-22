
//Creacion de Objeto
function Coche(marca,modelo,año){
    this.marca = marca;
    this.modelo =modelo;
    this.año = año;

}

//Añadiendo propiedad al objeto

Coche.prototype.color = '';
let carro1 = new Coche('Toyota', 'Cherokke','1987');
carro1.color = 'red';


//Eliminando una propiedd
delete carro1.modelo;



//Recorriendo el objeto clave valor
console.log('clave valor')
Object.entries(carro1).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
