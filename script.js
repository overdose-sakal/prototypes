  const signInBtn = document.querySelector('#signbtn');
  const registerBtn = document.querySelector('#regbtn');
  const registerForm = document.getElementById('form1');
  const signInForm = document.getElementById('form2');

  signInBtn.addEventListener('click', () => {
    registerForm.style.display = 'none';
    signInForm.style.display = 'block';


      signInBtn.classList.replace('btn-outline-success', 'btn-success');
  registerBtn.classList.replace('btn-success', 'btn-outline-success');

  });
  

registerBtn.addEventListener('click', () => {
  signInForm.style.display = 'none';
  registerForm.style.display = 'block';

  registerBtn.classList.replace('btn-outline-success', 'btn-success');
  signInBtn.classList.replace('btn-success', 'btn-outline-success');
});
