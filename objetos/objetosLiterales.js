let huesos = {
    num_ojos:2,
    color:'cafe',
    num_patas:4,
    altura:'1m',
    peso:'3kg',
    ladra:() => {
        return 'guau guau'
    },
    olfatea:(objeto) => {
        return 'huesos esta olfateando '+objeto
    },
    comer:(comida) => {
        if(comida=='carne'){return 'huesos esta contento'}
        else{return 'huesos ya no te quiere :('}
    }
};

console.log(huesos.ladra())
console.log(huesos.olfatea('otro perro'))
console.log(huesos.comer('carne'))

let snoopy = {
    num_ojos:2,
    color:'blanco',
    num_patas:2,
    altura:'1m',
    peso:'5kg'
};

console.log('huesos pesa: ',huesos.peso)
console.log('snoopy pesa:',snoopy.peso)

snoopy.amigo = 'charly brown'
snoopy.baila = () =>{return 'snoopy esta bailando'}
snoopy.color = 'blanco con manchas negras'

console.log('el color de snoopy es ',snoopy.color)

console.log(snoopy.baila())

console.log('el amigo de huesos es ' + huesos.amigo)
console.log('el amigo de snoopy es ' + snoopy.amigo)

console.log()

let scooby = {
    nombre:'scooby doo',
    saluda:function(){return 'hola soy' + this.nombre}
}

console.log(scooby.saluda())
