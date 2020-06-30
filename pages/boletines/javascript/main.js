/* console.log('Hola desde un archivo') */

//DOM
/* let links = document.querySelectorAll('a');

links.forEach(function(link){
    console.log(link)
}) */
/* let celdas = document.querySelectorAll('td');

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this)
    })
}) */

// obtener los elementos de la clase .close
let links = document.querySelectorAll('.close')
// recorrerlos
links.forEach(function(link){
// agregar un evento a cada uno de ellos
    link.addEventListener('click',function(event){
        event.preventDefault();
        let content = document.querySelector('.content')

        // quitarle las clases de animacion que ya tiene
        content.classList.remove('animate__animated')
        content.classList.remove('animate__fadeInDown')
        // agregarle clases para animar su salida 
        content.classList.add('animate__fadeOutUp')
        content.classList.add('animate__animated')

        setTimeout(function(){
            location.href='../index.html'
        },600)

    })
})

let icons = document.querySelectorAll('i')

/* icons.forEach(function(icon){
    icon.classList.remove('fa-star')
}) */