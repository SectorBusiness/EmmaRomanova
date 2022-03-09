




//modals
const body = document.querySelector('body');
const modalClose = document.querySelectorAll('.modal-close');
const openModalContact = document.querySelectorAll('.openModalContact');
const modalBg = document.querySelector('.modal-bg');
const modalContact = document.querySelector('.modal-contact');
const modalEvent = document.querySelector('.modal-event');

// modalEvent
const activitiesCard = document.querySelectorAll('.activities__card');
const modalEventH3 = document.querySelector('.modal-event h3');
const modalEventP = document.querySelector('.modal-event p');
const modalEventPriceFirst = document.querySelector('.modal-event-price-first')
const modalEventPriceSecond = document.querySelector('.modal-event-price-second')

const activitiesCardDescp = document.querySelectorAll('.activities__card-descp');

const modalEventData = [
    {
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