let myPenguin = {
    character:'Pingo',
    origin:'Rasmus Klump',
    creator:'Carla and Vilhelm Hansen',
    notes:'One of Rasmus best friends',
    saludar:function(){return 'hola, soy un pinguino y mi nombre es ' + this.character},
    volar:(puedeVolar)=>{//cambiar a function
                if(puedeVolar==true){return 'puedo volar!'}
                else{return 'no puedo volar!'}
    }
}
console.log('hola, soy un pinguino y mi nombre es ',myPenguin.character)

myPenguin.puedeVolar=false
myPenguin.graznar = () =>{return 'kaw kaw'}
console.log(myPenguin.graznar())

myPenguin.character='Señor Pingu'

console.log(myPenguin.saludar())
console.log(myPenguin.volar(false))
console.log(myPenguin.volar(true))
