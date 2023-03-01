export const handleBurger = () => {
    const header = document.querySelector('.header')
    const burgerBtn = header.querySelector('.burger')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        header.classList.toggle('active')
    })
}
