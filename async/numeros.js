function sup(num1,num2,callback){
    callback(num1,num2)
}

function callSuma(n1,n2){
    console.log(n1+n2)
}

function callResta(m1,m2){
    console.log(m1-m2)
}
function callMult(o1,o2){
    console.log(o1*o2)
}

sup(2,3,callSuma)
sup(2,3,callResta)