//modals
const body = document.querySelector('body');
const modalClose = document.querySelectorAll('.modal-close');
const openModalContact = document.querySelectorAll('.openModalContact');
const modalBg = document.querySelector('.modal-bg');
const modalContact = document.querySelector('.modal-contact');
const modalEvent = document.querySelector('.modal-event');
const headerContactMenuTrigger = document.querySelector('.header__contact-menu-trigger');
const menuMobile = document.querySelector('.menuMobile');
const headerWrapper = document.querySelector('.header__wrapper');
const menuMobileLink = document.querySelectorAll('.menuMobile-link');

// modalEvent
const activitiesCard = document.querySelectorAll('.activities__card');
const modalEventH3 = document.querySelector('.modal-event h3');
const modalEventP = document.querySelector('.modal-event p');
const modalEventPriceFirst = document.querySelector('.modal-event-price-first')
const modalEventPriceSecond = document.querySelector('.modal-event-price-second')

const activitiesCardDescp = document.querySelectorAll('.activities__card-descp');

const modalEventData = [{
        title: '1',
        text: 'Проведение свадьбы вместе с диджеем, 6 часов (все конкурсы, музыка и время проведения согласовываются индивидуально)',
        onePrice: 'Стоимость: от 18 000Р',
        twoPrice: 'Стоимость выездной регистрации с музыкальным сопровождением: от 7 000Р',
    },
    {
        title: '2',
        text: 'Проведение юбилея с диджеем, от 2х часов (все конкурсы, музыка и время проведения согласовываются индивидуально)',
        onePrice: 'Стоимость: от 12 000Р',

    },
    {
        title: '3',
        text: 'Проведение выпускного с диджеем, от 2х часов (все конкурсы, музыка и время проведения согласовываются индивидуально)',
        onePrice: 'Стоимость: от 10 000Р ',
        twoPrice: 'Выпускной 11-х классов. Проведение выпускного с диджеем, от 5 часов (все конкурсы, музыка и время проведения согласовываются индивидуально). Стоимость: от 25 000р',
    },
    {
        title: '4',
        text: 'Проведение корпоратива с диджеем, дедом морозом и снегурочкой, от 5 часов (все конкурсы, музыка и время проведения согласовываются индивидуально)',
        onePrice: 'Стоимость: от 25 000Р',
    },
    {
        title: '5',
        text: 'fhsd fjkhsdfj sdf',
        onePrice: 'Стоимость: от 18 000Р  5',
        twoPrice: 'Стоимость выездной регистрации: от 7 000Р 2',
    },
    {
        title: '6',
        text: 'Индивидуальный сценарий, любая тематика. Отлично подходит для празднования дня рождения или юбилея! Музыкальное сопровождение.',
        onePrice: 'Стоимость: от 15 000Р',
    },
]


// modalEvent end

const openModal = () => {
    modalBg.classList.add('active');
    body.classList.add('active')
}
const closeModal = () => {
    modalBg.classList.remove('active');
    body.classList.remove('active')
    modalContact.classList.remove('active')
    modalEvent.classList.remove('active')
}
openModalContact.forEach(elem => {
    elem.onclick = () => {
        closeModal()
        openModal()
        modalContact.classList.add('active');
    }
})
modalBg.onclick = () => {
    closeModal()
}
modalClose.forEach(elem => {
    elem.onclick = () => {
        closeModal()
    }
});

activitiesCard.forEach((elem, index) => {
    elem.onclick = () => {
        closeModal()
        openModal()
        modalEvent.classList.add('active');
        modalEventH3.textContent = activitiesCard[index].textContent;
        modalEventP.textContent = modalEventData[index].text;
        modalEventPriceFirst.textContent = modalEventData[index].onePrice;
        if (modalEventData[index].twoPrice) {
            modalEventPriceSecond.textContent = modalEventData[index].twoPrice;
        }
    }
})


const activeMenu = () => {
    if (window.pageYOffset > 150) {
        headerWrapper.classList.add("active")
    } else {
        headerWrapper.classList.remove("active")
    }
}

window.addEventListener("scroll", () => {
    activeMenu()
});



headerContactMenuTrigger.onclick = () => {
    menuMobile.classList.toggle('active')
    body.classList.toggle('active');
}
menuMobileLink.forEach(el => {
    el.onclick = () => {

        menuMobile.classList.remove('active')
        body.classList.remove('active');
    }
})

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        headerWrapper.classList.remove('hide')
    } else {
        headerWrapper.classList.add('hide')
    }
    prevScrollpos = currentScrollPos;
}


//modals
const allInput = document.querySelectorAll('.calculate__form-wrapper form input')
const allInputValue = () => {
    allInput.forEach(elem => elem.value = '')
}
const formModal = document.querySelector('.formModal');
const formModalSend = document.querySelector('.formModal-send');
const sendFormModal = (e) => {
    e.preventDefault();

    fetch('mailModal.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: new FormData(formModal)
    }).then((response) => {
        console.log(response.body);
        console.log(response)
        formModalSend.classList.add('active')
        setTimeout(() => {
            formModalSend.classList.remove('active')
            modalClose.forEach(elem => {
                elem.click()
                allInputValue()
            })
        }, 2000);
    })
}
formModal.addEventListener('submit', sendFormModal)

//форма
const contactmeFormForm = document.querySelector('.contactme__form-form');
const contactmeFormFormBtn = document.querySelector('.contactme__form-form button');
const contactmeFormFormInputs = document.querySelectorAll('.contactme__form-form input');

const sendFormNow = (e) => {
    e.preventDefault();
    fetch('mailModal.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: new FormData(formModal)
    }).then((response) => {
        console.log(response.body);
        console.log(response)
        contactmeFormFormBtn.textContent = "ОТПРАВЛЕНО"
        contactmeFormFormInputs.forEach(el => el.value = '')
        setTimeout(() => {
            contactmeFormFormBtn.textContent = "ОБСУДИТЬ МЕРОПРИЯТИЕ"

        }, 2000);
    })
}
contactmeFormForm.addEventListener('submit', sendFormNow)