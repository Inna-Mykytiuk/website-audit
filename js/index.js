document.querySelector('.burger-btn').addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.add('active');
});

document.querySelector('.close-btn').addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.remove('active');
});

/*modal window*/
const modal = document.getElementById('exampleModalCenter');
const openModalButtons = document.querySelectorAll('[data-toggle="modal"]');
const closeModalButton = document.querySelector('.modal-close');

const openModal = () => {
  modal.style.display = 'block';
};

const closeModal = () => {
  modal.style.display = 'none';
};

openModalButtons.forEach(button => {
  button.addEventListener('click', openModal);
});

closeModalButton.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});





