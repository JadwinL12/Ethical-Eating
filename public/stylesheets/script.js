const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const modal = document.querySelector(button.dataset.modalTarget)
        console.log(modal)
        openModal(modal)
    })
})

closeModalButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const modal = button.closest('.modalGuest')
        closeModal(modal)
    })
})

function openModal(modal){
    if (modal==null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if (modal==null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// for login button 
const openLoginButtonDesc = document.querySelectorAll('[data-modallogin-target]')
const closeLoginButtonDesc = document.querySelectorAll('[data-close-loginButton]')
const overlayLogin = document.getElementById('overlayLogin')


openLoginButtonDesc.forEach(button=>{
    button.addEventListener('mouseover', ()=>{
        console.log(button.dataset)
        const modal = document.querySelector(button.dataset.modalloginTarget)
        console.log(modal)
        openModal(modal)
    })
})

closeLoginButtonDesc.forEach(button=>{
    button.addEventListener('click', ()=>{
        const modal = button.closest('.modalLogin')
        closeModal(modal)
    })
})
function openModal(modal){
    if (modal==null) return
    modal.classList.add('active')
    overlayLogin.classList.add('active')
}

function closeModal(modal){
    if (modal==null) return
    modal.classList.remove('active')
    overlayLogin.classList.remove('active')
}

//for sign up
const openSignUpButtonDesc = document.querySelectorAll('[data-modalSignUp-target]')
const closeSignUpButtonDesc = document.querySelectorAll('[data-close-SignUpButton]')
const overlaySignUp = document.getElementById('overlaySignUp')


openSignUpButtonDesc.forEach(button=>{
    button.addEventListener('mouseover', ()=>{
        console.log(button.dataset)
        const modal = document.querySelector(button.dataset.modalsignupTarget)
        console.log(modal)
        openModal(modal)
    })
})

closeSignUpButtonDesc.forEach(button=>{
    button.addEventListener('click', ()=>{
        const modal = button.closest('.modalSignUp')
        console.log(modal)
        closeModal(modal)
    })
})
function openModal(modal){
    if (modal==null) return
    modal.classList.add('active')
    overlaySignUp.classList.add('active')
}

function closeModal(modal){
    if (modal==null) return
    modal.classList.remove('active')
    overlaySignUp.classList.remove('active')
}


// sign up inputs

// start of username
// const usernameInputSignUp = document.getElementsByClassName("signUpUsername");
// const passwordInputSignUp = document.getElementsByClassName("signUpPassword");

// usernameInputSignUp.forEach(input=>{
//     input.addEventListener("input", ()=>{
//         if(!this.match(/^[a-z0-9]+$/i)){
//             //show error
            
//         }
//     })
// })