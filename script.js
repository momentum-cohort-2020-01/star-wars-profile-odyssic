let starWarsData

const dataSection = document.querySelector('#container')

fetch('https://swapi.co/api/people/55/')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        const nameEl = document.createElement('h2')

        nameEl.innerText = data.name

        dataSection.appendChild(nameEl).classList.add("f3")

        dataSection.appendChild(homeWorld)

        const birthYear = document.createElement('p')
        birthYear.innerText = data.birth_year
        dataSection.appendChild(birthYear)

        const height = document.createElement('p')
        height.innerText = data.height
        dataSection.appendChild(height)

        //starships = none
        const starShips = document.createElement('p')
        starShips.innerText = data.starships
        dataSection.appendChild(starShips)

    });

fetch('https://swapi.co/api/species/23/')
    .then(function(response) {
        return response.json()
    })

.then(function(data) {

    let speciesName = document.createElement('p')

    speciesName.innerText = data.name

    dataSection.appendChild(speciesName)

});

fetch('https://swapi.co/api/planets/9/')
    .then(function(response) {
        return response.json()
    })

.then(function(data) {

    let homeWorld = document.createElement('p')

    homeWorld.innerText = data.name

    dataSection.appendChild(homeWorld)

});


// 
// example fetch('https://api.github.com/orgs/momentum-cohort-2020-01')
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {
//         const newEl = document.createElement('h2')