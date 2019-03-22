const {argv}=require('./yargs');
const funciones=require('./funciones')

let comando=argv._[0];

switch(comando){
    case 'crear':
    funciones.crear(argv);
    break;

    case 'mostrar':
    funciones.mostrar();
    break;

    case 'mostrarest':
    funciones.mostrarest(argv.nombre);
    break;

    case 'mostrarmat':
    funciones.mostrarmat();
    break;

    case 'mostrarpromedio':
    funciones.mostrarpromedio();
    break;

    case 'actualizar':
    funciones.actualizar(argv.nombre,argv.asignatura,argv.nota);
    break;

    case 'eliminar':
    funciones.eliminar(argv.nombre);
    break;

    default:
    console.log('No ingreso una funcion existente');

}   

