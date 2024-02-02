let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
if(numeroDeUsuario=== numeroSecreto){
  asignarTextoElemento('p',`Acertaste el  número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
  document.getElementById('reiniciar').removeAttribute('disabled');
}else{
  //el usuario no acerto
  if (numeroDeUsuario < numeroSecreto) {
        asignarTextoElemento("p", "El número es mayor");
      } else {
        asignarTextoElemento("p"," El número es menor");
     }
     intentos ++;
     limpiarCaja();
}
    return;

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
    
}

function generarNumeroSecreto() {
     return  Math.floor( Math.random()*10) +1;
    
}

function CondicionesIniciales() {
  asignarTextoElemento('h1','Juego del numero secreto');
  asignarTextoElemento('p','Selecciona un numero del 1 al 10');


  
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de inicio
  //generar numero aleatorio
  //inicializar el numero de intentos
  CondicionesIniciales();
  //deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
 
}

CondicionesIniciales();

//--------------------------------------------------------------------------------------
 /*function saludo(dato) {
    console.log(dato);
    
  }
  saludo("hola mundo");

  function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
  }
  saludar("esteban");

  function multiplicar(cifra){
    console.log(cifra*2);
  }
  multiplicar(8);

  function promedio(dato1, dato2, dato3){
    let sumaDatos = dato1+dato2+dato3;
    let promedioFinal=sumaDatos/3;
    console.log(promedioFinal);
  }
  promedio(5,6,7);

  function numeroMayor(cifra1,cifra2) {
    if (cifra1 > cifra2) {
        console.log(cifra1);
    }else{
        console.log(cifra2);
    }
    
  }
  numeroMayor(10,8);

  function multiplicarElMismo(valor) {
    console.log(valor * valor);

  }
  multiplicarElMismo(80);*/

  //---------------------------------------------------------------------------------

  /*function masaCorporal(altura, peso) {
    masaCorporal = altura / (peso * peso);
    console.log (masaCorporal);
  }
  masaCorporal(190, 100);

  function valorFactorial(numero) {
    valorFactorial = (numero = numero * 3 *2 * 1);
    console.log(valorFactorial);
  }
  valorFactorial(4);

  function conversionDolares(dolares) {
    conversionDolares = dolares * 3900;
    console.log(conversionDolares);
  }
  conversionDolares(1);

  function areaYPerimetroRectangulo(altura,anchura) {
    let area = altura * anchura;
    let perimetro = 2*(altura + anchura);
    console.log(`El area de la superficie es: ${area} y el perimetro de la superficie es: ${perimetro}`);
  }
  areaYPerimetroRectangulo(5,6);

  function areaYPerimetroCirculo(radio, pi) {
    let area1 = pi* (radio*2);
    let perimetro1 =( 2*pi)* radio;
    console.log (`La area del circulo es: ${area1} y el perimetro del circulo es: ${perimetro1}`);
  }
  areaYPerimetroCirculo(7, 3.14);

  function imprimirTabla(numero) {
    /*
    Imprime la tabla de multiplicar de cualquier número con JavaScript usando el ciclo while.
    
    let LIMITE = 10;
    let contador = 1;
    while (contador <= LIMITE) {
        let resultado = contador * numero;
        console.log(`${numero} x ${contador} = ${resultado}`);
        contador++;
    }
}

imprimirTabla(9);*/


//---------------------------------------------------------------------------------------

/**let lenguajesDeProgramacion = ["Javascript","C","C++","Kotlin","Phyton"];

  lenguajesDeProgramacion.push("Java");
  lenguajesDeProgramacion.push("Ruby");
  lenguajesDeProgramacion.push("Golang");
  console.log(lenguajesDeProgramacion);
  let reversa =  lenguajesDeProgramacion.reverse();
  console.log(reversa);
  //lenguajesDeProgramacion.push[]


   let notas =[4, 6, 8, 2];
  console.log(notas.length);
  let promedio = (notas[0] + notas[1]+ notas[2] + notas[3])/4 ;
  
  console.log(`el promedio de las notas son : ${promedio}`);

function grandeYPequeño(numero) {
let numeroGrande = Math.max(numero);
let numeroPequeno = Math.min(numero);
console.log (`El mayor es: ${numeroGrande}, El menor es: ${numeroPequeno}`); 
}

let numero = [1,2,3,4,5,6];
grandeYPequeño(numero);*/