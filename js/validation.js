document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let isValid = true;

  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  if (nameInput.value.trim() === '') {
    nameInput.classList.add('error-border');
    nameError.style.display = 'block';
    isValid = false;
  } else {
    nameInput.classList.remove('error-border');
    nameError.style.display = 'none';
  }

  const phoneInput = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  const phoneValue = phoneInput.value.trim();

  if (phoneValue === '') {
    phoneInput.classList.add('error-border');
    phoneError.textContent = 'This field is required';
    phoneError.style.display = 'block';
    isValid = false;
  } else {
    const phoneRegex = /^[0-9\s]+$/;
    if (!phoneRegex.test(phoneValue)) {
      phoneInput.classList.add('error-border');
      phoneError.textContent = 'Invalid phone number. Only digits and spaces are allowed.';
      phoneError.style.display = 'block';
      isValid = false;
    } else {
      phoneInput.classList.remove('error-border');
      phoneError.style.display = 'none';
    }
  }

  // Валідація чекбокса
  const checkbox = document.getElementById('checkbox');
  const checkboxLabel = document.querySelector('.form-conditions__text');
  if (!checkbox.checked) {
    checkboxLabel.classList.add('error-border');
    isValid = false;
  } else {
    checkboxLabel.classList.remove('error-border');
  }

  if (isValid) {
    alert('Форма відправлена успішно!');
    document.getElementById('myForm').reset();
  }
});

document.getElementById('name').addEventListener('input', function () {
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  if (nameInput.value.trim() !== '') {
    nameInput.classList.remove('error-border');
    nameError.style.display = 'none';
  }
});

document.getElementById('phone').addEventListener('input', function () {
  const phoneInput = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  const phoneValue = phoneInput.value.trim();

  if (phoneValue === '') {
    phoneInput.classList.add('error-border');
    phoneError.textContent = 'This field is required';
    phoneError.style.display = 'block';
  } else {
    const phoneRegex = /^[0-9\s]+$/;
    if (!phoneRegex.test(phoneValue)) {
      phoneInput.classList.add('error-border');
      phoneError.textContent = 'Invalid phone number. Only digits and spaces are allowed.';
      phoneError.style.display = 'block';
    } else {
      phoneInput.classList.remove('error-border');
      phoneError.style.display = 'none';
    }
  }
});

document.getElementById('checkbox').addEventListener('change', function () {
  const checkboxLabel = document.querySelector('.form-conditions__text');
  if (this.checked) {
    checkboxLabel.classList.remove('error-border');
  } else {
    checkboxLabel.classList.add('error-border');
  }
});
