function suma(){
    let num1= Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);
    let res= num1+num2;
    document.getElementById('res').value=res;
}
function resta(){
    let num1= Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);
    let res= num1-num2;
    document.getElementById('res').value=res;
}
function multiplicacion(){
    let num1= Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);
    let res= num1*num2;
    document.getElementById('res').value=res;
}
function division(){
    let num1= Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);
    if (num2 !==0){
        let res=num1/num2;
    document.getElementById('res').value= res;
    }else{
        alert("No se puede dividir por cero.");
    }
}