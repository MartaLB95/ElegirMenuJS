function pedir()
{

    //Pedimos el número de plato y comprobamos que sea del 1 al 5

    let numPrimerPlato=prompt("¿Qué desea tomar de primero (del 1 al 5)");

    if (isNaN(numPrimerPlato)|| numPrimerPlato<1 || numPrimerPlato>5){
        alert("Introduce un número del 1 al 5");
        return;
    }
    let numSegundoPlato=prompt("¿Y de segundo?");

     if (isNaN(numSegundoPlato)|| numSegundoPlato<1 || numSegundoPlato>5){
        alert("Introduce un número del 1 al 5");
        return;
     }

     //Convertimos el string en un entero

    numPrimerPlato=parseInt(numPrimerPlato);
    numSegundoPlato=parseInt(numSegundoPlato);

  

     //Inicializamos variables primer y segundo plato

    let primerPlato;
    let segundoPlato;

    //Estructura condicional para atribuir un plato a cada número

    switch(numPrimerPlato){
        case 1: 
        primerPlato="ensalada césar";
        break;

        case 2: 
        primerPlato="ensaladilla de mariscos";
        break;

        case 3: 
        primerPlato="verduras a la parrilla";
        break;

        case 4: 
        primerPlato="huevos rellenos";
        break;

        case 5: 
        primerPlato="coliflor gratinada"; 
        break;
    }

    switch(numSegundoPlato){
        case 1: 
        segundoPlato="pollo al chilindrón";
        break;

        case 2:
        segundoPlato="risotto con setas";
        break;

        case 3:
        segundoPlato="secreto a la brasa";
        break;

        case 4: 
        segundoPlato="merluza a la vasca";
        break;

        case 5: 
        segundoPlato="migas";
        break;
        
    }
    
//Mostramos los platos elegidos mediante un alert    

alert(`Perfecto, entonces será ${primerPlato} de primero y ${segundoPlato} de segundo.`);
    
}