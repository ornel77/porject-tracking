/* ------------------------------- GET Element ------------------------------ */
const navbar = document.querySelector('.navbar')
const separation = document.querySelector('.separation')
// const openIcon = document.getElementById('open-icon')
const closeIcon = document.getElementById('close-icon')

const hamburger = document.querySelector('.hamburger')


// openIcon.addEventListener('click', () => {
//     navbar.classList.toggle('active')
//     openIcon.style.display = 'none'
//     closeIcon.style.display = 'flex'
//     // separation.textContent = '------------------'
// })

// closeIcon.addEventListener('click', ()=>{
//     navbar.classList.remove('active')
//     openIcon.style.display = 'initial'
//     closeIcon.style.display = 'none'
// })

hamburger.addEventListener('click', () => {
    document.body.classList.toggle('active')
    // navbar.classList.toggle('active')
})