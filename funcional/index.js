const request = require('request')

//function getPlanet(error,response,body){
//    return JSON.parse(body)
/*     const data=JSON.parse(body)
    console.log('El nombre del planeta es: ',data.name) */
//}

function getPeopleBad(error,response,body){//callback
    console.log(response.statusCode)// 200 si ok
    const data=JSON.parse(body);
    
    data.results.map((personaje)=>{ // callback hell, nunca hacer esto
        request (personaje.homeworld,function(error,response,body){
            const planeta=JSON.parse(body)
            naves=[]
            for (const navesURL of personaje.starships){
                request(navesURL,function(error,response,body){
                    //naves.push(JSON.parse.body)
                    const nave = JSON.parse(body)
                    console.log('El persn¡onaje es: ',personaje.name)
                    console.log('El planeta es: ',planeta.name)
                    console.log('Su nave es: ',nave.name)
                })
            }
            //console.log('El persn¡onaje es: ',personaje.name)
            //console.log('El planeta es: ',planeta.name)
            //for (const nave of naves) {
            //    console.log('Esta es una de sus naves: ',nave.name)
            //}
        })
        //return {nombre:personaje.name,planeta:request(personaje.homeworld,getPlanet)}
    })

    //console.log(personajes)
/*     for (const person of data.results){
        console.log('El nombre del personaje es: ',person.name)
        //console.log(person.homeworld)
        request(person.homeworld,getPlanet) // se ejecuta 10 veces
    } */
}

function getPeople(error,response,body){
    const data=JSON.parse(body)
    //map, filter y find
    const personajesMap=data.results.map((personaje)=>{
        //return{nombre:personaje.name,peso: `${personaje.mass} kg`}
        return `El personaje ${personaje.name} tiene un peso de ${personaje.mass} kg`
    })
    //console.log(personajesMap)
    const personajesFilter=data.results.filter((personaje)=>{
        return personaje.gender==='n/a'//asercion logica
    })
    //console.log(personajesFilter)
    const personajesFind=data.results.find((personaje)=>{
        return personaje.birth_year==='57BBY'//&&personaje.gender=='female'//asercion logica
    })
    //console.log(personajesFind)
    const imcPersonajes = data.results.map((personaje)=>{
        return {nombre:personaje.name,imc:(personaje.mass)/(personaje.height/100)**2}
    }).filter((personaje)=>personaje.imc<30)//return implicito
    console.log(imcPersonajes)
}

request ('http://swapi.dev/api/people',getPeople) // se ejecuta una vez