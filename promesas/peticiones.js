const axios = require('axios');

function getCharacter(id){
    const url = `https://swapi.dev/api/people/${id}`
    const character=axios.get(url)

    character.then((response)=>{
        console.log(response.data)
        console.log(response.status)
    })
    .catch((error)=>{
        console.log(error.response.data)
        console.log(error.response.status)
    })

    console.log(character)
}
//getCharacter(13)

function getProfile(id){
    const url=`https://swapi.dev/api/people/${id}`
    const character=axios.get(url)

    character.then((response)=>{
        return response.data// esto esta regresando otra promesa, estoy regresando los datos del personaje
    }).then((personaje)=>{
        return axios.get(personaje.homeworld).then((response)=>{
            return {...personaje,homeworld:response.data}// split object es6, crea una copia de un objeto
        })
    }).then((personaje)=>{
        //console.log(promise)
        console.log('El personaje que escogiste es: ',personaje.name)
        console.log('Nacio en el año: ',personaje.birth_year)
        console.log('Tiene el genero: ',personaje.gender)
        console.log('Su planeta es: ',personaje.homeworld.name)
    }).catch((error)=>{
        console.log(error.response.data)
    })

    /* character.then((response)=>{
        const personaje=response.data
        console.log('El personaje que escogiste es: ',personaje.name)
        console.log('Nacio en el año: ',personaje.birth_year)
        console.log('Tiene el genero: ',personaje.gender)
        axios.get(personaje.homeworld).then((response)=>{
            const planeta = response.data
            console.log('Su planeta es: ',planeta.name)
        }).catch((error)=>{
            console.log(error.response.data)
        })
    }) */
}

getProfile(3)