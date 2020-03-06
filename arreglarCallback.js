function suma(numero_uno,numero_dos){
    setTimeout(function(){
       var resultado = numero_uno + numero_dos;
       return resultado;
    }, 10000);
}
 
var resultado = suma(2,5)
 
// console.log(resultado);
 
 
 
function sumaBien(x1,x2,next){
    setTimeout(function(){
        var resultado = x1 + x2;
        next(resultado);
     }, 1000);
}
  

// /* Descomentá esta parte para probar la función sumaBien
sumaBien(2,5,function(resultado){
    console.log(resultado);
})
// */

