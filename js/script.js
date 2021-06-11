
const cuadro=document.getElementById('square');
const textotitle=document.getElementById('pritext');
const instruccion=document.getElementById('pripra');
const restadotext=document.getElementById('resultadotext');


function cambio(){

    cuadro.classList.replace('square', 'colorchange')
textotitle.classList.replace('pritext', 'pritextenconder')
instruccion.classList.replace('pripra', 'pripraesconder')
restadotext.classList.replace('resultadotext', 'resultadotextver')


     setTimeout(function () {
   
        restadotext.classList.replace('resultadotextver', 'resultadotext')


  }, 3000);

}





let operacion;
document.querySelector('#suma').addEventListener('click', () =>{
    operacion = '+';



    
});
document.querySelector('#resta').addEventListener('click', () =>{
    operacion = '-';
});
document.querySelector('#multiplicacion').addEventListener('click', () =>{
    operacion = '*';
});
document.querySelector('#division').addEventListener('click', () =>{
    operacion = '/';
});


document.querySelector('#calcular').addEventListener('click', () =>{



    const n1 = parseInt(document.querySelector('#n1').value);
    const n2 = parseInt(document.querySelector('#n2').value);
   
    const opera=document.getElementById('verresultado');

    let res;
    let mensaje='Ingresa nuevo valor';
    if(operacion  == '+'){
        res = n1 + n2;
    }else if( operacion  == '-'){
        res = n1 - n2;
    }else if(operacion  == '*'){
        res = n1 * n2;
    }else if(operacion  == '/'){
        res = n1 / n2;
    }
    
   document.querySelector('#verresultado').innerHTML = res;

 

  setTimeout(function () {
    document.querySelector('#verresultado').innerHTML = mensaje;
    opera.classList.replace('resultado', 'resultadoinv')

}, 4000);

    cambio();
    
});
