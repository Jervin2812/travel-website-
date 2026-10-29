/**
 * TERRA — Authentication & User Profile Engine
 * Simulates registration, sign in, password strength, password visibility, and profile editing.
 */

document.addEventListener('DOMContentLoaded', () => {
  initPasswordToggles();
  initPasswordStrengthMeter();
  initLoginForm();
  initSignupForm();
  initProfilePage();
});

// Password visibility toggle helper
function initPasswordToggles() {
  document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const input = document.getElementById(targetId);
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = isPassword ? 'bi bi-eye-slash' : 'bi bi-eye';
      }
    });
  });
}

// Password strength indicator
function initPasswordStrengthMeter() {
  const passwordInput = document.getElementById('signupPassword');
  const strengthBar = document.getElementById('passwordStrengthBar');
  const strengthText = document.getElementById('passwordStrengthText');

  if (!passwordInput || !strengthBar) return;

  passwordInput.addEventListener('input', (e) => {
    const val = e.target.value;
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    if (val.length === 0) {
      strengthBar.style.width = '0%';
      strengthBar.className = 'progress-bar';
      if (strengthText) strengthText.textContent = '';
    } else if (score <= 1) {
      strengthBar.style.width = '25%';
      strengthBar.className = 'progress-bar bg-danger';
      if (strengthText) strengthText.textContent = 'Weak password';
    } else if (score === 2) {
      strengthBar.style.width = '50%';
      strengthBar.className = 'progress-bar bg-warning';
      if (strengthText) strengthText.textContent = 'Fair password';
    } else if (score === 3) {
      strengthBar.style.width = '75%';
      strengthBar.className = 'progress-bar bg-info';
      if (strengthText) strengthText.textContent = 'Good password';
    } else {
      strengthBar.style.width = '100%';
      strengthBar.className = 'progress-bar bg-success';
      if (strengthText) strengthText.textContent = 'Strong password!';
    }
  });
}

// Simulated Login
function initLoginForm() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!email || !password) {
      alert('Please fill in both email and password.');
      return;
    }

    const user = {
      name: email.split('@')[0].replace(/[._]/g, ' ').toUpperCase(),
      email: email,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      phone: '+1 (555) 321-9874',
      country: 'United States'
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    const target = window.location.pathname.includes('/pages/') ? '../../index.html' : 'index.html';
    window.location.href = target;
  });
}

// Simulated Signup
function initSignupForm() {
  const form = document.getElementById('signupForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();

    if (!fullName || !email || !password) {
      alert('Please fill in all required fields.');
      return;
    }

    const user = {
      name: fullName,
      email: email,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      phone: '+1 (555) 489-0123',
      country: 'United States'
    };

    localStorage.setItem('currentUser', JSON.stringify(user));
    const target = window.location.pathname.includes('/pages/') ? '../../index.html' : 'index.html';
    window.location.href = target;
  });
}

// Simulated Profile Page
function initProfilePage() {
  const profileForm = document.getElementById('userProfileForm');
  if (!profileForm) return;

  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null') || {
    name: 'Jervin Raj',
    email: 'jervin.raj@example.com',
    phone: '+1 (555) 234-5678',
    country: 'United States',
    bio: 'Avid traveler, photographer, and alpine explorer.'
  };

  // Populate inputs
  const nameInput = document.getElementById('profileName');
  const emailInput = document.getElementById('profileEmail');
  const phoneInput = document.getElementById('profilePhone');
  const countryInput = document.getElementById('profileCountry');
  const bioInput = document.getElementById('profileBio');

  if (nameInput) nameInput.value = currentUser.name || '';
  if (emailInput) emailInput.value = currentUser.email || '';
  if (phoneInput) phoneInput.value = currentUser.phone || '';
  if (countryInput) countryInput.value = currentUser.country || '';
  if (bioInput) bioInput.value = currentUser.bio || '';

  // Avatar upload simulation preview
  const avatarUpload = document.getElementById('avatarUpload');
  const avatarImg = document.getElementById('profileAvatarImg');
  if (avatarUpload && avatarImg) {
    avatarUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          avatarImg.src = event.target.result;
          currentUser.avatar = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const updatedUser = {
      ...currentUser,
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      country: countryInput.value.trim(),
      bio: bioInput.value.trim()
    };

    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    const alertBox = document.getElementById('profileSuccessAlert');
    if (alertBox) {
      alertBox.classList.remove('d-none');
      setTimeout(() => alertBox.classList.add('d-none'), 3000);
    }
  });
}
