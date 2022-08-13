const URL_GET_CARDS = "https://rickandmortyapi.com/api/character";

const showCards = async () => {
    let body = ``;
    const characters = await getData(URL_GET_CARDS);
    characters.results.map((character) => {
        return (body += `
            <div class="tarjeta">
                <div class="titulo">${character.name}</div>
                <div class="cuerpo">
                    <img src=${character.image} alt="muestra">
                </div>
                <div class="pie">
                    status: ${character.status} 
                </div>
            </div>
        `);
    });

    document.getElementById("cards").innerHTML += body;
} 

showCards();