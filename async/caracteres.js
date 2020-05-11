function caracteres(cadena,caracteresCall){
    caracteresCall(cadena)
}
function minus(ch1){
    console.log(ch1.toLowerCase())
}
function mayus(ch2){
    console.log(ch2.toUpperCase())
}
caracteres('pejeLAgarTO',minus)
caracteres('PEjelagartO',mayus)