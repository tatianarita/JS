alert('Welcome to the Jodita Costera Calculeishon');
let empezar = prompt('Arracamo?')
while (empezar.toUpperCase() != 'NO' && empezar.toUpperCase() != 'ESC' && empezar.toUpperCase() != 'SALIR' && empezar != null){
        function resta (origen,destino){
            let resultado = origen - destino
            if (resultado < 0) {resultado = resultado*(-1)};
            alert (`metele nomás que estas a ${resultado} km de ahi!`);
        }
        var origen = prompt('En que zona de la costa te encontrás actualmente?');
        var destino = prompt('A que zona de la costa argentina tenes pensado ir?');
        var origen = origen.toUpperCase()
        var destino = destino.toUpperCase()

        if (origen === 'VILLA GESELL'){origen = 333};
        if (origen === 'SAN BERNARDO'){origen = 292};
        if (origen === 'PINAMAR'){origen = 323};
        if (origen === 'CARILO'){origen = 327};
        if (origen === 'VALERIA DEL MAR'){origen = 324};
        if (origen === 'MAR DE LAS PAMPAS'){origen = 337};
        if (origen === 'MAR AZUL'){origen = 339};
        if (origen === 'MAR CHIQUITA'){origen = 367};
        if (origen === 'MAR DE COBO'){origen = 375};
        if (origen === 'SANTA CLARA'){origen = 377};
        if (origen === 'MAR DEL PLATA'){origen = 393};
        if (origen === 'MIRAMAR'){origen = 417};
        if (origen === 'SAN CLEMENTE'){origen = 261};
        if (origen === 'LAS TONINAS'){origen = 275};
        if (origen === 'SANTA TERESITA'){origen = 278};
        if (origen === 'MAR DEL TUYU'){origen = 282};
        if (origen === 'SAN BERNARDO'){origen = 292};
        if (origen === 'MAR DE AJO'){origen = 295};
        if (origen === 'NECOCHEA'){origen = 445};
        if (origen === 'ARENAS VERDES'){origen = 442};

        if (destino === 'VILLA GESELL'){destino = 333};
        if (destino === 'SAN BERNARDO'){destino = 292};
        if (destino === 'PINAMAR'){destino = 323};
        if (destino === 'CARILO'){destino = 327};
        if (destino === 'VALERIA DEL MAR'){destino = 324};
        if (destino === 'MAR DE LAS PAMPAS'){destino = 337};
        if (destino === 'MAR AZUL'){destino = 339};
        if (destino === 'MAR CHIQUITA'){destino = 367};
        if (destino === 'MAR DE COBO'){destino = 375};
        if (destino === 'SANTA CLARA'){destino = 377};
        if (destino === 'MAR DEL PLATA'){destino = 393};
        if (destino === 'MIRAMAR'){destino = 417};
        if (destino === 'SAN CLEMENTE'){destino = 261};
        if (destino === 'LAS TONINAS'){destino = 275};
        if (destino === 'SANTA TERESITA'){destino = 278};
        if (destino === 'MAR DEL TUYU'){destino = 282};
        if (destino === 'SAN BERNARDO'){destino = 292};
        if (destino === 'MAR DE AJO'){destino = 295};
        if (destino === 'NECOCHEA'){destino = 445};
        if (destino === 'ARENAS VERDES'){destino = 442};

        resta (origen,destino);

empezar = prompt('queres calcular pa algun otro lado?');

}
