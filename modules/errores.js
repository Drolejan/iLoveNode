function otraFuncion(){
    return serompe();
}

function serompe(){
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(function(){
        try{
        return 3 + z;
        }catch(err){
            console.error('Error en mi funcion asincrona')
            cb(err);
        }
    })
}

try{
    //serompe();
    //otraFuncion();//Aunque esten en funciones igual lo captura
    seRompeAsincrona(function(err){
        console.log(err.message);
    });//En una funcion async no logramos capturarlo asi, tenemos que usar un try en la funcion
} catch(err){
    console.error('Vaya, algo se rompio');
    //console.error(err.message);
    console.error(err);
    console.log('Pero no pasa nada, seguimos')
}

console.log('Esto esta al final');