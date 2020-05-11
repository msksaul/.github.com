let datos =[
    {'name':'Edwin','age':27,'city':'CDMX',},
    {'name':'Luis','age':19,'city':'Durango',},
    {'name':'Ana','age':24,'city':'EdoMex',}
]
function getUsuarios(call){
    //console.log(call)
    setTimeout(function(){
        call(datos)
    },2000)
}
console.log('Bienvenido, obteniendo datos ')
getUsuarios(function(datos2){
    console.log(datos2)
})
console.log('Usuarios recibidos')