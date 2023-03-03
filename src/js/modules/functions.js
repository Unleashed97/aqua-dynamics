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

export const handleMap = () => {
    const map = document.getElementById('yamap')

    if (map) {
        let ok = false
        window.addEventListener('scroll', function () {
            if (ok === false) {
                ok = true
                setTimeout(() => {
                    let script = document.createElement('script')
                    script.src =
                        'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A47e6049e656568366a693434fb12f0e962bb403d3710817b3253c77d392e2778&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=false'
                    document.getElementById('yamap').replaceWith(script)
                }, 500)
            }
        })
        // блок с контактами на карте выравниваем под .container, т.к. сама карта width=100%
        if (window.matchMedia('screen and (min-width: 768px)').matches) {
            // let leftOffset = document.querySelector("footer .container").getBoundingClientRect().left;
            // document.querySelector(".contacts").style.left = leftOffset + 15 + 'px';
        }
    }
}
