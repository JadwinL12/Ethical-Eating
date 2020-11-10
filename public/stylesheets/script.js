const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

openModalButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const modal = document.querySelector(button.dataset.modalTarget)
        const overlay = document.getElementById('overlay')
        openModal(modal, overlay)
    })
})

closeModalButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const modal = button.closest('.modalGuest')
        const overlay = document.getElementById('overlay')
        closeModal(modal, overlay)
    })
})
//for sign up
const openSignUpButtonDesc = document.querySelectorAll('[data-modalSignUp-target]')
const closeSignUpButtonDesc = document.querySelectorAll('[data-close-SignUpButton]')
// const overlaySignUp = document.getElementById('overlaySignUp')


openSignUpButtonDesc.forEach(button=>{
    button.addEventListener('mouseover', ()=>{
        console.log(button.dataset)
        const modal = document.querySelector(button.dataset.modalsignupTarget)
        const overlaySignUp = document.getElementById('overlaySignUp')
        openModal(modal, overlaySignUp)
    })
})

closeSignUpButtonDesc.forEach(button=>{
    button.addEventListener('click', ()=>{
        const modal = button.closest('.modalSignUp')
        const overlaySignUp = document.getElementById('overlaySignUp')
        closeModal(modal, overlaySignUp)
    })
})

// for login button 
const openLoginButtonDesc = document.querySelectorAll('[data-modallogin-target]')
const closeLoginButtonDesc = document.querySelectorAll('[data-close-loginButton]')


openLoginButtonDesc.forEach(button=>{
    button.addEventListener('mouseover', ()=>{
        const modal = document.querySelector(button.dataset.modalloginTarget)
        const overlayLogin = document.getElementById('overlayLogin')
        openModal(modal, overlayLogin)
    })
})

closeLoginButtonDesc.forEach(button=>{
    button.addEventListener('click', ()=>{
        const modal = button.closest('.modalLogin')
        const overlayLogin = document.getElementById('overlayLogin')
        closeModal(modal, overlayLogin)
    })
})
function openModal(modal, overlayLogin){
    if (modal==null) return
    modal.classList.add('active')
    overlayAdd(overlayLogin)
}

function closeModal(modal, overlayLogin){
    if (modal==null) return
    modal.classList.remove('active')
    overlayRemove(overlayLogin)
}

function overlayAdd(overlay){
    overlay.classList.add('active')
}

function overlayRemove(overlay){
    overlay.classList.remove('active')
}



