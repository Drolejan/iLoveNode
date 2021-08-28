let saludo = "hola ";
let variableEntorno=process.env.NOMBRE || "Desconocido";
let web=process.env.WEB || "No tengo web";
console.log(saludo + variableEntorno);
console.log("Mi web es "+web);
console.log("Probando nodemon");