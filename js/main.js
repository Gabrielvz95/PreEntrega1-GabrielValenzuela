function resta(a, b){
    return a + b;
}
let fechaActual = 2022;
let nombre = prompt("Ingresar nombre: ");

console.log("Hola " + nombre)
console.log("A continuacion te pediremos que respondas unas preguntas para evaluar tu solitud de prestamos")

let fechaIngresada = prompt("Ingresar fecha de nacimiento: ")

let edad = resta(fechaIngresada, fechaActual);

if(edad >= 18){
    console.log("Edad aceptada")
    sueldo = prompt("Ingresa ingresos mensuales: ")

}else{
    console.log("Para salicitar un prestamo tiene que ser mayor de edad")
}

while(sueldo <= 120.000){
    alert("Ingresos demaciados bajos.")
    sueldo = prompt("Ingrese ganacias mensuales")
    
}
alert("Ingreso mensuales aceptados!")

let ocupacion = prompt("Escriba el numero de su profecion o ocupacion:\b 1 - Empleador \b 2 - Relacion de dependencia \b 3 - independinte")

