const request = require('request');

function atrapar(error,response,body){ //callback
    console.log(response.statusCode) // 200
    //console.log(body)
    const data=JSON.parse(body)// convierte un JSON en un objeto de JS
    /* for (let i=0;i<data.results.length;i++){
        console.log(data.results[i].name)
    } */
    data.results.map(person => { //map -> forEach
        console.log(person.name)
    })
    for (const person of data.results){
        console.log(person.name)
    }
    
}

request('https://swapi.dev/api/planets',atrapar)