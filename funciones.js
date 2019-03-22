listaEstudiantes=[];
const fs=require('fs');
const average=3;
const crear=(estudiante)=>{
    listar();
    if(validarMateria(estudiante.matematicas)&&validarMateria(estudiante.ingles)&&validarMateria(estudiante.programacion)){
        let est={
            nombre:estudiante.nombre,
            matematicas:estudiante.matematicas,
            ingles:estudiante.ingles,
            programacion:estudiante.programacion,
            promedio:promedio(estudiante.matematicas,estudiante.ingles,estudiante.programacion)
        };
        let duplicado=listaEstudiantes.find(function(objectFound){
            return objectFound.nombre==estudiante.nombre;
        });
        if(!duplicado){
            listaEstudiantes.push(est);
            console.log(listaEstudiantes);
            guardar();
        }else{
            console.log('Ya existe el estudiante');
        }

    }else{
        console.log('alguna materia no cumple con el rango de 1 a 5');
        console.log(estudiante);
    }


}

const validarMateria=(materia)=>{
   if(materia<0 || materia>5)
     return false;
   else
     return true;
}

const promedio=(n1,n2,n3)=>{
    let promedio=(n1+n2+n3)/3;
    return promedio;
}

const listar=()=>{
    try{
        listaEstudiantes=require('./listado.json');
    }catch(error){
        listaEstudiantes=[];
    }

    //listaEstudiantes=JSON.parse(fs.readFileSync('listado.json'))
}

const guardar=()=>{
    let datos=JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json',datos,(err)=>{
        if(err)throw(err);
        console.log('Archivo creado con exito');
    })
}

const printEstudiante=(est)=>{
    console.log(est.nombre);
    console.log('notas');
    console.log('matematicas '+est.matematicas);
    console.log('ingles '+est.ingles);
    console.log('programacion '+est.programacion);
    console.log('promedio '+est.promedio +'\n');


}

const mostrar=()=>{
     listar();
     console.log('Notas de los estudiantes');
     listaEstudiantes.forEach(estudiante=>{
        printEstudiante(estudiante);
     })
}

const mostrarest=(nomb)=>{
    listar();
    let found=listaEstudiantes.find(function(objectFound){
        return objectFound.nombre==nomb;
    });
    if(!found){
        console.log('No encontrado');
    }else{
        printEstudiante(found);
    }

}

const mostrarmat=()=>{
    listar();
    let ganan=listaEstudiantes.filter(mat=>mat.matematicas >= average);
    if(ganan.length==0){
        console.log('ningun estudiante ha ganado');
    }else{
        ganan.forEach(estudiante=>{
            printEstudiante(estudiante);

        })
    }
}

const mostrarpromedio=()=>{
    listar();
    let ganan=listaEstudiantes.filter(mat=>mat.promedio >= average);
    if(ganan.length==0){
        console.log('ningun estudiante ha ganado');
    }else{
        ganan.forEach(estudiante=>{
            printEstudiante(estudiante);
        })
    }

}

const actualizar=(nom,asig,calif)=>{
    listar();
    let found=listaEstudiantes.find(function(objectFound){
        return objectFound.nombre==nom;
    });
    if(!found){
        console.log('No encontrado');
    }else{
        found[asig]=calif;
        guardar();
    }

}

const eliminar=(nom)=>{
    listar();
    let nuevo=listaEstudiantes.filter(mat=>mat.nombre != nom);
    if(nuevo.length==listaEstudiantes.length){
        console.log('no se encontro el estudiante a eliminar');
    }else{
        listaEstudiantes=nuevo;
        guardar();
    }

}

module.exports={
    crear,
    mostrar,
    mostrarest,
    mostrarpromedio,
    actualizar
}