export const handleBurger = () => {
    const header = document.querySelector('.header')
    const burgerBtn = header.querySelector('.burger')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        header.classList.toggle('active')
        document.body.classList.toggle('fixed')
    })
}

export const handleFaq = () => {
    const questions = document.querySelectorAll('.faq')
    questions.forEach((question) => {
        const opener = question.querySelector('.faq-panel')
        const status = question.querySelector('.faq-status')

        opener.addEventListener('click', () => {
            ;[...questions]
                .filter((q) => q !== question)
                .forEach((q) => {
                    const status = q.querySelector('.faq-status')
                    q.classList.remove('opened')
                    status.src = 'img/icons/plus-circle.svg'
                })
            if (question.classList.contains('opened')) {
                question.classList.remove('opened')
                status.src = 'img/icons/plus-circle.svg'
            } else {
                question.classList.add('opened')
                status.src = 'img/icons/minus-circle.svg'
            }
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

export const handleTabs = () => {
    const tabs = document.querySelector('.tabs')
    const btnControlList = document.querySelectorAll('.btn--control')
    const contentItems = tabs.querySelectorAll('.tabs__content-item')

    btnControlList.forEach((btn) =>
        btn.addEventListener('click', () => {
            btnControlList.forEach((btn) => btn.classList.remove('active'))
            contentItems.forEach((item) => item.classList.remove('active'))

            btn.classList.add('active')
            const targetId = btn.getAttribute('data-target')

            const targetEl = tabs.querySelector(`#${targetId}`)
            targetEl.classList.add('active')
        }),
    )
}

export const handleNav = () => {
    const navLinks = document.querySelectorAll('.nav .nav__link')

    navLinks.forEach((link) =>
        link.addEventListener('click', (e) => {
            e.preventDefault()

            navLinks.forEach((link) => link.classList.remove('active'))
            link.classList.add('active')

            const headerOffset = 160

            const targetId = link.getAttribute('data-target')
            const targetEl = document.querySelector(`#${targetId}`)
            const elTopOffset = targetEl.getBoundingClientRect().top
            const offsetPosition =
                elTopOffset + window.pageYOffset - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })

            console.log(window.pageYOffset, elTopOffset, offsetPosition)
        }),
    )
}
