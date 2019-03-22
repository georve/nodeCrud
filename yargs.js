const nombre={
    demand:true,
    alias:'n'
}

const matematicas={
    demand:true,
    alias:'m'
}

const programacion={
    demand:true,
    alias:'p'
}

const ingles={
    demand:true,
    alias:'i'
}

const creacion={
    nombre,
    matematicas,
    ingles,
    programacion
}

const muestraest={
    nombre
}

const actualizar={
    nombre,
    asignatura:{
        demand:true,
        alias:'a'
    },
    nota:{
        demand:true,
        alias:'c'
    }
}

const eliminar={
    nombre
}

const argv=require('yargs')
           .command('crear','Crear un estudiantre',creacion)
           .command('mostrar','mostrar estudiantes')
           .command('mostrarest','mostrar estudiantes',muestraest)
           .command('mostrarmat','mostrar estudiantes matematicas')
           .command('mostrarpromedio','mostrar con mejores promedio')
           .command('actualizar','actualiza un estudiante',actualizar)
           .command('eliminar','elimina un estudiante',eliminar)
           .argv;

module.exports={
    argv
};

