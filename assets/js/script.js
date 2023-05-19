document.getElementById("mainCharactersBox").addEventListener('mouseover', function () {

    for (let i = 1; i < 6; i++) {
        getData(i, "mainCharacters", 1)
    }
}, { once: true })

document.getElementById("secondaryCharactersBox").addEventListener('mouseover', function () {

    for (let i = 6; i < 11; i++) {
        getData(i, "secondaryCharacters", 2)
    }
}, { once: true })

document.getElementById("extraCharactersBox").addEventListener('mouseover', function () {

    for (let i = 11; i < 16; i++) {
        getData(i, "extraCharacters", 3)
    }
}, { once: true })

/* id es el número del personaje. 
idSection es el nombre de la sección donde inyectar.
 nColor es el número asociado al color de esa sección */
function getData(id, idSection, nColor) {

    let response = fetch(`https://swapi.dev/api/people/${id}`)

    response.then(resp => resp.json())
        .then(json => {
            console.log(json)
            injectHtml(json, idSection, nColor)

        })
        .catch(error => {
            console.log(error)
        })
}

function injectHtml(json, idSection, nColor) {
    const { name, height, mass } = json
    //inyectar info html
    let card = `
                <div class="col-4">
                    <div class="card">
                        <div class="card-body ps-5 shadow">
                            <i class="bi bi-circle-fill spot color-${nColor}"></i>
                            <h5 class="card-title ps-4">${name}</h5>
                            <p class="card-text ps-4">
                            Estatura: ${height} cm.
                            Peso: ${mass} kg.
                            </p>
                        </div>
                    </div>
                </div>
            `
    document.getElementById(idSection).innerHTML += card
}