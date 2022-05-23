
function onChange() {
    const confirmDiv = document.querySelector('.confirm');
    const span = document.createElement('span');
    const spanSelector = document.querySelector('.password-error');
    const password = document.querySelector('input[name=userPassword]');
    const confirm = document.querySelector('input[name=confirmPassword]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
      spanSelector.remove();
    } else {
      if (spanSelector) return;
      confirm.setCustomValidity('Passwords do not match');
      confirmDiv.appendChild(span);
      span.classList.add('password-error');
      span.textContent = 'Passwords do not match';
    }
  }