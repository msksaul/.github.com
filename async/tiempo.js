function tiempos(arregloT,compararCall){
    compararCall(arregloT)
}
function comp(arr){
    let tMayores=[]
    for(let i=0;i<arr.length;i++){
        if((arr[i]/60)>=2){
            tMayores.push(arr[i])}
        else{
            //no hacer nada
        }
    }
    console.log('Los tiempos mayores a 2 horas son: ',tMayores)
        
}
tiempos([200,400,100,60],comp)