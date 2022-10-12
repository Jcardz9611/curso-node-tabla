const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')




console.clear();

//const base = 6;



//const [ , ,arg3 ] = process.argv;
//const[, base=5 ] = arg3.split('=');

//console.log(base);

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(`${nombreArchivo} creado`))
.catch(err=>console.log(err));


