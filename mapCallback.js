function miMap(arrViejo) {
    var nuevoArray = [];
    arrViejo.forEach(x=>nuevoArray.push(porDos(x)));
    return nuevoArray;
  }


function porDos(nro) {
    return nro*2
}

// Probando miMap
arrayViejo = [1,2,3,4,5]
var arrayNuevo = miMap(arrayViejo)
console.log(arrayNuevo) // arrayNuevo = [2,4,6,8,10] 
