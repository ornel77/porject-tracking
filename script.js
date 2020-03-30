/* ------------------------------- GET Element ------------------------------ */
const navbar = document.querySelector('.navbar')
const separation = document.querySelector('.separation')
const openIcon = document.querySelector('.open')
const closeIcon = document.querySelector('.close')


if (window.innerWidth > 600) {
    console.log('dfgdfg');
    closeIcon.style.display = 'none'
    openIcon.style.display = 'none'


}




openIcon.addEventListener('click', () => {
    navbar.classList.add('active')
    openIcon.style.display = 'none'
    closeIcon.style.display = 'flex'
    // separation.textContent = '------------------'
})

closeIcon.addEventListener('click', ()=>{
    navbar.classList.remove('active')
    openIcon.style.display = 'flex'
    closeIcon.style.display = 'none'
})