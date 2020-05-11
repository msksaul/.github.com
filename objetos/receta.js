let receta = {
    titulo:'Estofado',
    porciones:'5',
    ingredientes:['res','pollo','conejo','venado','tomate','pimiento','arroz','papa','guisquil']
}

console.log(receta.titulo)
console.log('Porciones:',receta.porciones) 
console.log('Ingredientes:')
for(i=0;i<receta.ingredientes.length;i++){
    console.log(receta.ingredientes[i])
}
