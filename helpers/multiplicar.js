const fs = require('fs');
const crearArchivo = async (base = 5,listar, hasta)=>{
    try{
    let salida = "";
    let nombreArchivo ="";
    for(let i=1;i<=hasta;i++){
        salida += `${base}x${i}=${base*i}\n`;
    }
    
    if(listar){
        console.log("=======================");
        console.log("     Tabla del:",base);
        console.log("=======================");
        console.log(salida);
    }
    
    
    fs.writeFileSync(`/salida/tabla-${base}.txt`,salida);
    
    
    nombreArchivo =`Tabla-${base}.txt`
    return nombreArchivo;
    }
    catch(error){
        throw error
    }
}

module.exports = {
    crearArchivo 
}