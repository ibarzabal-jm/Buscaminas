const FILAS = 10;
const COLUMNAS = 10;

let contenedorTablero = document.getElementById("tablero");
contenedorTablero.innerHTML = ''




function crearTablero(){
    tablero= new Array(FILAS);
    
    for ( var i = 0; i< tablero.length; i ++){
        tablero[i] = new Array(COLUMNAS);
        for ( var j = 0; j< tablero[i].length; j++){
            tablero[i][j] = 0;
        }
    }

    return tablero;

}

tablero = crearTablero();

mostrarTablero(tablero);

function mostrarTablero(tablero){
    
    contenedorTablero.innerHTML = '';

    for (i = 0; i < tablero.length; i++){

        contenedorTablero.innerHTML += `<tr>`;

        
        for (var j = 0; j < tablero[i].length; j++)
        {
            contenedorTablero.innerHTML += `<td>${j}</td>`;          
        }

        contenedorTablero.innerHTML += `</tr>`;

    }
}

