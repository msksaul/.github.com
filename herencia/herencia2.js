class Largometraje{
    constructor(titulo,duracion){
        this.titulo=titulo
        this.duracion=duracion
    }
}

class Pelicula extends Largometraje{
    constructor(titulo,duracion,genero,clasificacion){
        super(titulo,duracion)
        this.genero=genero
        this.clasificacion=clasificacion
    }
}

class Documental extends Largometraje{
    constructor(titulo,duracion,patrocinador,pais){
        super(titulo,duracion)
            this.patrocinador=patrocinador
            this.pais=pais
        
    }
}

class Cine{
    constructor(nombre){
    this.nombre=nombre
    }
    reproducir(largometraje){
        return `Reproduciento: ${largometraje.titulo}`
    }
    /* reproducirPelicula(pelicula){
        return `Reproduciento: ${pelicula.titulo}`
    }
    reproducirDocumental(documental){
        return `Reproduciento: ${documental.titulo}`
    } */
}

let titanic = new Pelicula('Titanic','190m','historica','T')
let volcanes= new Documental('Volcanes de America','100m','UNESCO','Mexico')

let cine = new Cine('Cinepolis')

console.log(cine.reproducir(titanic))
console.log(cine.reproducir(volcanes))