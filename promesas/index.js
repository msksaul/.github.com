function login(email,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{// simulando ir por datos al servidor
            const mail='edwin@gmail.com'
            const pass='holachicos'

            if (email===mail && password===pass){
                resolve ({mensaje:'Te has logueado con exito',logueado:true})
            }
            else{
                const error= new Error('Tu password o email con incorrectos')
                reject(error)
            }

        },1000)
    })
}
console.log(login('edwin@gmail.com','holachicos'))
login('edwin@gmail.com','holachicos')
    .then((mensaje)=>console.log(mensaje.logueado))// promesa se ejecuto de manera correcta
    .catch((error)=>console.log(error))//incorrecta

login('edwin@mail.com','holachcos')
    .then((mensaje)=>console.log(mensaje))// promesa se ejecuto de manera correcta
    .catch((error)=>console.log(error.message))//incorrecta