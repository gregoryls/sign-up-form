
function onChange() {
    const confirmDiv = document.querySelector('.confirm');
    const span = document.createElement('span');
    const spanSelector = document.querySelector('.password-error');
    const password = document.querySelector('input[name=userPassword]');
    const confirm = document.querySelector('input[name=confirmPassword]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    //   confirmDiv.removeChild(confirmDiv.lastChild);
      spanSelector.remove();
    } else {
      confirm.setCustomValidity('Passwords do not match');
      confirmDiv.appendChild(span);
      span.classList.add('password-error');
      span.textContent = 'Passwords do not match';
    }
  }