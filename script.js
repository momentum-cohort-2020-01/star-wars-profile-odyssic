let starWarsData

const dataSection = document.querySelector('#container')

dataSection.classList.add("mw5", "center", "bg-white", "br3", "pa3", "pa4-ns", "mv3", "ba", "b--black-10")

fetch('https://swapi.co/api/people/55/')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        const nameEl = document.createElement('h1')
        nameEl.classList.add("f3", "mb2")
            // nameEl.classList.add("mb2")

        nameEl.innerText = data.name

        dataSection.appendChild(nameEl)

        // dataSection.appendChild(homeWorld)

        const birthYear = document.createElement('p')
        birthYear.innerText = "Date of Birth: " + data.birth_year
        dataSection.appendChild(birthYear)

        const height = document.createElement('p')
        height.innerText = "Height: " +
            data.height
        dataSection.appendChild(height)

        //starships = none
        const starShips = document.createElement('p')
        starShips.innerText = "Starships: None"
        dataSection.appendChild(starShips)



    });

fetch('https://swapi.co/api/species/23/')
    .then(function(response) {
        return response.json()
    })

.then(function(data) {

    let speciesName = document.createElement('p')

    speciesName.innerText = "Species: " + data.name

    dataSection.appendChild(speciesName)

});

fetch('https://swapi.co/api/planets/9/')
    .then(function(response) {
        return response.json()
    })

.then(function(data) {

    let homeWorld = document.createElement('p')

    homeWorld.innerText = "Homeworld: " + data.name

    dataSection.appendChild(homeWorld)

});


// 
// example fetch('https://api.github.com/orgs/momentum-cohort-2020-01')
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {
//         const newEl = document.createElement('h2'