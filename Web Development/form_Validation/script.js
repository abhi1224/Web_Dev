function validate(){
    let n1 = document.getElementById('num1')
    let n2 = document.getElementById('num2')

    if(n1.value != "" && n2.value != ""){
        if(n1.value == n2.value){
        alert('success')
        return true;
        }
    }
    alert("The values should be equal and not blank")
    return false;
}