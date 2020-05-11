let libros = [
    {
        nombre:'Don Quijote',
        autor:'Cervantes',
        leido:false    
    },
    {
        nombre:'El Señor Presidente',
        autor:'Asturias',
        leido:true
    },
    {
        nombre:'Viaje al Centro de la Tierra',
        autor:'Verne',
        leido:false
    },
    {
        nombre:'Harry Potter',
        autor:'J.K. Rowling',
        leido:true
    }
]
console.log(libros.length)


for(i=0;i<libros.length;i++){
    console.log(libros[i])
}