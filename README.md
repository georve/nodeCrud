Proyecto Node que permite realizar operaciones con un estudiante.
El proyecto consta de tres archivos donde el index es el archivo principal
1. Para correr el proyecto es necesario correr: node index crear con valores del estudiante
   Crear un estudiantre

    Options:
  --help              Show help                                        [boolean]
  --version           Show version number                              [boolean]
  --nombre, -n                                                        [required]
  --matematicas, -m                                                   [required]
  --ingles, -i                                                        [required]
  --programacion, -p                                                  [required]

     Missing required arguments: nombre, matematicas, ingles, programacion
     ejemplo:  node index crear -n Otilio -m 4 -i 5 -p 5

     Las notas van del 1 al 5
     

2. Para mostrar los estudiante insertados: node index mostrar. Se lista todos los estudiantes con sus materias y promedios

3. Para mostrar la informacion de un estudiante: node index mostrarest -n nombre

4. Para mostrar Mejore promedio: node index mostrarpromedio

