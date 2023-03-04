
const submit = document.getElementById('submit')
submit.addEventListener('click', confirm)
function confirm(){
    const password = document.getElementById("password")
    const confirmPassword=document.getElementById("confirmPassword")
    if (password.value !==confirmPassword.value){
        alert(password.value)
        alert(confirmPassword.value)
        console.log(password.value);
        console.log(confirmPassword.value);
        confirmPassword.setCustomValidity("passwords do not match !!!")
    }
   

}
