//VAR para realizar la acción 5 veces por cada uno
var mainCount = 1
var secondaryCount = 6
var extraCount = 11


//FUCIONES PARA INYECTAR DATOS EN CADA SECCIÓN
// Secciones event listener comentadas ya que modificar el elemento padre desconecta el event listener- reemplazado por atributo onmousenenter en html
function mainCharactersGet() {
    if (mainCount < 6) {
        getData(mainCount, "mainCharacters", 1)
        mainCount ++
        console.log(mainCount);
    }
}

/* document.getElementById("mainCharactersBox").addEventListener('mouseover', function () {

    if (mainCount < 6) {
        getData(mainCount, "mainCharacters", 1)
        mainCount ++
        console.log(mainCount);
    }
}) */

function secondaryCharactersGet() {
    if (secondaryCount < 11) {
        getData(secondaryCount, "secondaryCharacters", 2)
        secondaryCount ++
        console.log(secondaryCount);
    }
}

/* document.getElementById("secondaryCharactersBox").addEventListener('mouseover', function () {

    if (secondaryCount < 11) {
        getData(secondaryCount, "secondaryCharacters", 2)
        secondaryCount ++
        console.log(secondaryCount);
    }
    
}) */

function extraCharactersGet() {
    if (extraCount < 16) {
        getData(extraCount, "extraCharacters", 3)
        extraCount ++
        console.log(extraCount);
    }
}

/* document.getElementById("extraCharactersBox").addEventListener('mouseover', function () {

    if (extraCount < 16) {
        getData(extraCount, "extraCharacters", 3)
        extraCount ++
        console.log(extraCount);
    }
    
}) */

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