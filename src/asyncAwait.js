async function hola(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Hola, "+nombre);
            resolve(nombre);
        },1500);
    });
}

async function hablar (nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('bla bla bla bla');
            resolve(nombre);
            reject('Hay un error');
        },1000)
    })
}

async function adios(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("Adios, "+nombre);
            resolve();
        },1000);
    });
}

async function main(){
    let nombre = await hola('Alex');
    await hablar();
    await hablar();// Verifica que pasa cuando quitamos await
    await hablar();
    await adios(nombre);
    console.log('Terminamos proceso');
}

console.log('Empezamos proceso');
main();
console.log('Segunda instruccion');