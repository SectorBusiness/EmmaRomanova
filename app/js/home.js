let select = function () {
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





//modals
const body = document.querySelector('body');
const modalClose = document.querySelectorAll('.modal-close');
const openModalContact = document.querySelectorAll('.openModalContact');
const modalBg = document.querySelector('.modal-bg');
const modalContact = document.querySelector('.modal-contact')


const openModal = () => {
    modalBg.classList.add('active');
    body.classList.add('active')
}

const closeModal = () => {
    modalBg.classList.remove('active');
    body.classList.remove('active')
    modalContact.classList.remove('active')
}

openModalContact.forEach(elem => {
    elem.onclick = () => {
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