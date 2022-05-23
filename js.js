
function onChange() {
    const confirmDiv = document.querySelector('.confirm');
    const span = document.createElement('span')
    const password = document.querySelector('input[name=userPassword]');
    const confirm = document.querySelector('input[name=confirmPassword]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
      confirmDiv.removeChild(confirmDiv.lastChild);
    } else {
      confirm.setCustomValidity('Passwords do not match');
      confirmDiv.appendChild(span);
      span.textContent = 'Passwords do not match';
    }
  }