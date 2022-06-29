const formContainer = document.querySelector(".form_container");
const formContainer2 = document.querySelector(".form_container2");
const signUpBtn = document.querySelector(".registration");
const logInBtn = document.querySelector(".registration2");
const loginParent = document.querySelector(".login_div")
const welcomeTest = document.querySelector(".welcome")
const accountConfirmation = document.querySelector(".text")



signUpBtn.addEventListener('click',()=>{
    formContainer.style.display = "none";
    formContainer2.style.display = "block";
    signUpBtn.style.display = "none";
    logInBtn.style.display = "flex";
    loginParent.style.display = "none";
    welcomeTest.textContent = "Create Account";
    accountConfirmation.textContent ="Already registered ?"


})


logInBtn.addEventListener('click',()=>{
    formContainer.style.display = "block";
    formContainer2.style.display = "none";
    signUpBtn.style.display = "flex";
    logInBtn.style.display = "none";
    loginParent.style.display = "block";
    welcomeTest.textContent = "Welcome";
    accountConfirmation.textContent ="Have no account yet ?"


})