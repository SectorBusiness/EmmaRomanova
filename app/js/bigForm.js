let select = function() {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();



const dataBigForm = [{
    mainEvent: 'Юбилей',
    people: 'до 18',
    longTimeEvent: '1 час',
    dopEvent: [],
    name: '',
    telephone: '',
}, ]
const sliderTime = document.querySelector('.slider-time');
const firstSelect = document.querySelector('.firstSelect');
const secondSelect = document.querySelector('.secondSelect');
const calculateDescpItem = document.querySelectorAll('.calculate-descp p');
const calculateServItem = document.querySelectorAll('.calculate__serv-item');
const servInput = document.querySelectorAll('.serv-input');

const selectEventMain = document.querySelector('.selectEvent');
const selectEventItem = document.querySelectorAll('.selectEventItem');
const selectCalculatePeopleMain = document.querySelector('.selectCalculatePeopleMain');
const selectCalculatePeople = document.querySelectorAll('.selectCalculatePeople')
const formCalculateSend = document.querySelector('.formCalculateSend')

const removeCalcItem = () => {
    calculateDescpItem.forEach(elem => {
        elem.classList.remove('active')
    })
}
const calculateSliderCheak = () => {

    if (sliderTime.value < 20) {
        removeCalcItem()
        calculateDescpItem[0].classList.add('active');
        dataBigForm.longTimeEvent = '1 час'
    } else if (sliderTime.value >= 20 && sliderTime.value <= 39) {
        removeCalcItem()
        calculateDescpItem[1].classList.add('active');
        dataBigForm.longTimeEvent = '2 часа'
    } else if (sliderTime.value >= 40 && sliderTime.value <= 59) {
        removeCalcItem()
        calculateDescpItem[2].classList.add('active');
        dataBigForm.longTimeEvent = '3 часа'
    } else if (sliderTime.value >= 60 && sliderTime.value <= 79) {
        removeCalcItem()
        calculateDescpItem[3].classList.add('active');
        dataBigForm.longTimeEvent = '4 часа'
    } else if (sliderTime.value >= 80) {
        removeCalcItem()
        calculateDescpItem[4].classList.add('active');
        dataBigForm.longTimeEvent = '5 часов и больше'
    }
}
sliderTime.addEventListener('mousemove', () => {
    console.log(dataBigForm);
    calculateSliderCheak()
})

const selectSecondData = () => {
    dataBigForm[0].people = selectCalculatePeopleMain.textContent
    console.log(dataBigForm);
}

secondSelect.onclick = () => {
    selectSecondData()
}

// if (window.innerWidth < 576) {
//   setInterval(() => {
//     console.log(dataBigForm);
//     calculateSliderCheak()
//   }, 1000);
// }



// доп услуги
const dopServices = () => {
    servInput.forEach((elem, index) => {
        if (elem.checked) {
            dataBigForm[0].dopEvent.push(elem.name)
                // console.log(dataBigForm[0]);
        }
    })
}

servInput.forEach(elem => {
        elem.onclick = () => {
            dataBigForm[0].dopEvent = []
            dopServices()
        }
    })
    //данные селектов 

const resetSelectPeople = () => {
    selectCalculatePeople.forEach(elem => {
        elem.classList.remove('d-none')
    })
}

const selectEvent = () => {

    // selectEventItem.forEach((elem, index) => {
    if (selectEventMain.textContent === 'Юбилей') {
        dataBigForm[0].mainEvent = 'Юбилей'
        resetSelectPeople()
        selectCalculatePeople[1].classList.add('d-none');
        selectCalculatePeople[2].classList.add('d-none');
        selectCalculatePeople[6].classList.add('d-none');
        selectCalculatePeople[7].classList.add('d-none');

    } else if (selectEventMain.textContent === 'Свадьба') {
        dataBigForm[0].mainEvent = 'Свадьба'
        resetSelectPeople()
        selectCalculatePeople[3].classList.add('d-none');

    } else if (selectEventMain.textContent === 'Корпоратив') {
        resetSelectPeople()
        selectCalculatePeople[1].classList.add('d-none');
        selectCalculatePeople[2].classList.add('d-none');

    } else if (selectEventMain.textContent === 'Другое') {
        dataBigForm[0].mainEvent = 'Другое'
        resetSelectPeople()
        selectCalculatePeople[3].classList.add('d-none');
    }
    // })
}

selectEventItem.forEach((elem, index) => {
    elem.onclick = () => {
        selectEvent();
        console.log(dataBigForm);
    }
});
selectEvent()
const formCalculateSendName = document.querySelector('#formCalculateSendName')
const formCalculateSendPhone = document.querySelector('#formCalculateSendPhone')
const formCalculateSendSend = document.querySelector('.formCalculateSend-send');

const sendForm = (e) => {
    e.preventDefault();
    dataBigForm[0].name = formCalculateSendName.value
    dataBigForm[0].telephone = formCalculateSendPhone.value
    fetch('mail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(dataBigForm[0])
    }).then((response) => {
        console.log(response.body);
        console.log(response)
        formCalculateSendSend.classList.add('active')
        setTimeout(() => {
            formCalculateSendSend.classList.remove('active')
            formCalculateSendName.value = ''
            formCalculateSendPhone.value = ''
        }, 2000);
    })
}
formCalculateSend.addEventListener('submit', sendForm)