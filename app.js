const form = document.getElementById('regForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const dept = document.getElementById('dept').value.trim();
  const pass = document.getElementById('pass').value.trim();

  if (!name || !email || !dept || !pass) {
    showMessage('❌ All fields are required. Please fill in all details.', 'error');
    return;
  }

  // Success message (no backend, just display)
  showMessage(
    `✅ Registration Successful!<br>
     <strong>Name:</strong> ${escapeHTML(name)}<br>
     <strong>Email:</strong> ${escapeHTML(email)}<br>
     <strong>Department:</strong> ${escapeHTML(dept)}`,
    'success'
  );

  form.reset();
});

function showMessage(text, type) {
  message.className = type; // sets 'success' or 'error'
  message.innerHTML = text;
  message.classList.remove('hidden');
}

// Basic HTML escape to avoid injecting tags in message area
function escapeHTML(str) {
  return str.replace(/[&<>"']/g, s => (
    { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[s]
  ));
}
