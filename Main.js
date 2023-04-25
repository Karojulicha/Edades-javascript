// cada persona 
const Juan = { nombre: 'juan', Edad: 15 }
const Carlos = { nombre: 'Carlos',Edad: 25}
const Maria = { nombre: 'Maria',Edad: 14}
const Angelica = { nombre: 'Angelica',Edad: 19}
const Alexander = { nombre: 'Alexander',Edad: 57 }
const Angela = { nombre: 'Angela',Edad: 38}
const German = { nombre: 'German', Edad: 24}
const Alex = { nombre: 'Alex',Edad: 57}
const Johan = { nombre: 'johan',Edad: 122}
const Mariana = { nombre: 'Mariana', Edad: 17 }
// Crear un array con las edades de cada persona
let edades = [];
const personas = [
    Juan, Carlos, Maria, Angelica, Alexander, Angela, German, Alex, Johan, Mariana
]
for (let i = 0; i < personas.length; i++) {
    if (personas[i].Edad >= 1 && personas[i].Edad <= 120)  {
        edades.push(personas[i].Edad);
    } else {
        console.log ("Error validado: la edad de "  + personas[i].Edad + " no se encuentra en el rango de edad, por favor revise la edad ")
    }
    
}
// Calcular la suma de las edades
let suma = 0;
for (let f = 0; f < edades.length; f++) {
    suma += edades[f]; 
}
// Calcular el valor mínimo de las edades
const edadmin = (Math.min(...edades));
// Calcular el valor máximo de las edades
const edadmax = (Math.max(...edades));
// Calcular el promedio de las edades
const edadpromedio = (suma / edades.length);
// Mostrar los resultados por consola
    console.log(edadmax);
    console.log(edadmin);
    console.log(edadpromedio);