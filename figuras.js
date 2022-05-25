// codigo del cuadrado
console.group("cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado*4;
} 

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado*lado;
} 

// console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// codigo del triangulo
console.group("triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, "+ ladoTriangulo2+ "cm, "+ baseTriangulo + "cm");
// console.log("la altura del triangulo es de: "+ alturaTriangulo+" cm");

function perimetroTriangulo(lado1,lado2,base){
    return (Number(lado1)+Number(lado2)+Number(base));
}
// console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base,altura){
    return (base*altura)/2
}

// console.log("El area del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();

// codigo del circulo

console.group("circulo");
// const radioCirculo= 4;
// console.log("El radio del circulo mide: " + radioCirculo + "cm");
function diametroCirculo(radio){
    return radio*2

}
// console.log("El diametro del circulo mide: " + diametroCirculo + "cm");
const PI= Math.PI;
// console.log("PI equivale a: " + PI );

function perimetroCirculo(radio){
    const diametro= (radio*2);
    return diametro*PI
}
// console.log("El perimetro del circulo mide: " + perimetroCirculo + "cm");

function areaCirculo(radio){
    return (radio*radio)*PI;
}
// console.log("El area del circulo mide: " + areaCirculo + "cm2");

console.groupEnd();

// interactuar con el html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro+" cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area+ " cm2");
}

function calcularPerimetroTriangulo(){
    const l1 = document.getElementById("inputLado1");
    const value1 =l1.value;
    const l2 = document.getElementById("inputLado2");
    const value2 = l2.value;
    const base = document.getElementById("inputBase");
    const value3 = base.value;
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert (perimetro+ " cm")
}

function calcularAreaTriangulo(){
    const base = document.getElementById("inputBase");
    const valueB =base.value;
    const altura = document.getElementById("inputAltura");
    const valueA =altura.value;
    const area = areaTriangulo(valueB,valueA);
    alert (area + " cm2");
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputRadio");
    const valueR = radio.value;
    const perimetro = perimetroCirculo(valueR);
    alert (perimetro+ " cm")

}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputRadio");
    const valueR= radio.value;
    const area = areaCirculo(valueR);
    alert (area + " cm2")
}




// guardar el estado (columna activa)
let columnaActiva = 1

//seleccionar las columnas 
const columnas = document.querySelectorAll(".columna")

//escuchar los clicks 

columnas.forEach((columna, indice) =>
{
    columna.addEventListener("click", function(){
        cambiarColumna(indice)
    })
})

// cambiar el estado de las columnas 
function cambiarColumna(indice){
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
} 