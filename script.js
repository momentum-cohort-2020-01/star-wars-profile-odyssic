// let starWarsData

const dataSection = document.querySelector('#container')

dataSection.classList.add("mw5", "center", "bg-white", "br3", "pa3", "pa4-ns", "mv3", "ba", "b--black-10")

fetch('https://swapi.co/api/people/55/')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        const img = document.createElement('img')
        img.src = "adi-gallia-3_1539ac3a.webp"

        dataSection.appendChild(img)

        img.classList.add("br-100", "h4", "w4", "dib", "ba", "b--black-05", "pa2")

        const nameEl = document.createElement('h1')
        nameEl.classList.add("f3", "mb2")
            // nameEl.classList.add("mb2")

        nameEl.innerText = data.name

        dataSection.appendChild(nameEl)

        // dataSection.appendChild(homeWorld)

        const birthYear = document.createElement('p')
        birthYear.innerText = "Date of Birth: " + data.birth_year
        dataSection.appendChild(birthYear)
        birthYear.classList.add("f5", "fw4", "gray", "mt0")

        const height = document.createElement('p')
        height.innerText = "Height: " +
            data.height
        dataSection.appendChild(height)

        height.classList.add("f5", "fw4", "gray", "mt0")

        //starships = none
        const starShips = document.createElement('p')
        starShips.innerText = "Starships: None"
        dataSection.appendChild(starShips)

        starShips.classList.add("f5", "fw4", "gray", "mt0")



    });

fetch('https://swapi.co/api/species/23/')
    .then(function(response) {
        return response.json()
    })

.then(function(data) {

    let speciesName = document.createElement('p')

    speciesName.innerText = "Species: " + data.name

    dataSection.appendChild(speciesName)
    speciesName.classList.add("f5", "fw4", "gray", "mt0")

});

fetch('https://swapi.co/api/planets/9/')
    .then(function(response) {
        return response.json()
    })

.then(function(data) {

    let homeWorld = document.createElement('p')

    homeWorld.innerText = "Homeworld: " + data.name

    dataSection.appendChild(homeWorld)

    homeWorld.classList.add("f5", "fw4", "gray", "mt0")

});


// 
// example fetch('https://api.github.com/orgs/momentum-cohort-2020-01')
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {
//         const newEl = document.createElement('h2'