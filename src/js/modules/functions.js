export const handleBurger = () => {
    const header = document.querySelector('.header')
    const burgerBtn = header.querySelector('.burger')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        header.classList.toggle('active')
    })
}

export const handleFaq = () => {
    const questions = document.querySelectorAll('.faq')
    questions.forEach((question) => {
        const opener = question.querySelector('.faq-title')
        const status = question.querySelector('.faq-status')
        opener.addEventListener('click', () => {
            ;[...questions]
                .filter((q) => q !== question)
                .forEach((q) => {
                    q.classList.remove('opened')
                    status.src = 'img/icons/plus-circle.svg'
                })
            question.classList.toggle('opened')
            if (question.classList.contains('opened')) {
                status.src = 'img/icons/minus-circle.svg'
            } else {
                status.src = 'img/icons/plus-circle.svg'
            }

            console.log(status)
        })
    })
}
