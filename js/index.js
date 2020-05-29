var tablero = document.getElementById("tablero");



var matriz = new Array(3);

for ( i = 0; i< matriz.length; i ++){
    matriz[i] = new Array(3);
}

matriz[0][0] = 1;
matriz[0][1] = 2;
matriz[0][2] = 3;

matriz[1][0] = 4;
matriz[1][1] = 5;
matriz[1][2] = 6;

matriz[2][0] = 7;
matriz[2][1] = 8;
matriz[2][2] = 9;


for (i = 0; i < matriz.length; i++)
{
    for (var j = 0; j < matriz[i].length; j++)
    {
        tablero.innerHTML += (matriz[i][j]);
    }

    tablero.innerHTML +=`<br/>`
}

/*
crearTablero();

function crearTablero(){

    tablero.innerHTML="";
    for(let i = 0 ; i < 10 ; i++){
        let row = tablero.insertRow(i);
        for( let j = 0; j < 10 ; j++){
            celda = row.insertCelda(j);
        }
    }
}

*/
