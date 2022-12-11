
function submit() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let textarea = document.getElementById('textarea').value
    console.log(name)
    console.log(email)
    console.log(textarea)
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('textarea').value = ''

    if(name.trim() === '') {
        alert('Please, write your name!')
    } else if (email.trim() === '') {
        alert('Please, write your e-mail!')
    } else if (textarea.trim() === '') {
        alert('Please, write something!')
    }
}




const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)

