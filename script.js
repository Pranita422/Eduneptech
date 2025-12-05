const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Switch between tabs
loginTab.addEventListener('click', () => {
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
  loginTab.classList.add('bg-violet-500', 'text-white');
  registerTab.classList.remove('bg-violet-500', 'text-white');
  registerTab.classList.add('text-violet-500', 'border', 'border-violet-500');
});

registerTab.addEventListener('click', () => {
  registerForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  registerTab.classList.add('bg-violet-500', 'text-white');
  loginTab.classList.remove('bg-violet-500', 'text-white');
  loginTab.classList.add('text-violet-500', 'border', 'border-violet-500');
});

// Handle login form submission
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  if (email && password) {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'dashboard.html';
  } else {
    alert('Please enter email and password!');
  }
});


/*document.getElementById('nepLink').addEventListener('click', () => showSection('nep'));*/

