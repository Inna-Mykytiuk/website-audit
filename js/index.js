function toggleBodyScroll(shouldDisable) {
  if (shouldDisable) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}

document.querySelector('.burger-btn').addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.add('active');
  toggleBodyScroll(true);
});

document.querySelector('.close-btn').addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.remove('active');
  toggleBodyScroll(false);
});

document.querySelector('.mobile-nav-btn').addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.remove('active');
  toggleBodyScroll(false);
  openModal();
});

const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.remove('active');
  });
});

document.querySelector('.mobile-sign-btn').addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.remove('active');
});

/*modal window*/

const modal = document.getElementById('exampleModalCenter');
const openModalButtons = document.querySelectorAll('[data-toggle="modal"], .hero-button, .mobile-nav-btn, .slider-info__btn');

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





