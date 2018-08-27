const argv = require('./config/yargs').argv;
//otra forma
const colors = require('colors/safe');

// entramos a la carpeta muliplicar y leyemos el archivo multiplicar.js
// haremos uso de destructuracion
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');


//let base = 'abc';
//console.log(module);

//console.log(multiplicar);

//console.log('HOla', process.argv);
//let argv = process.argv;
//let parametro = argv[2];
//split separa en varios elementos de un arreglo y el [1] solo selecciona el 2do elemento
//let base = parametro.split('=')[1];


//argumento de Yargs
console.log(argv);
console.log('Limite', argv.limite);


let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('Listar');
        listarArchivo(argv.base, argv.limite)
            .then(lista => console.log(lista));
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.red(archivo)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


//argumento de process
/*let argv2 = process.argv;
console.log(argv2);*/

/*
console.log(base);



    */