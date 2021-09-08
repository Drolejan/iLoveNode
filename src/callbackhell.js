function hola(nombre, miCallback){
    setTimeout(function(){
        console.log("Hola, "+nombre);
        miCallback(nombre);
    },1500);
}

function hablar (callbackHablar){
    setTimeout(function(){
        console.log('bla bla bla bla');
        callbackHablar();
    })
}

function adios(nombre,otroCallback){
    setTimeout(function(){
        console.log("Adios, "+nombre);
        otroCallback();
    },1000)
}

// --

console.log("Iniciando Proceso");
hola("Alex",function(nombre){
    hablar(function(){
        adios(nombre,function(){
            console.log("Terminando proceso ahora si");
        });
    });
});

