function login() {
  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value;

  const users = {
    shoeb: { password: '1111', name: 'Shoeb Ahmed', role: 'employee' },
    shanawaz: { password: '1234', name: 'Mohd Shanawaz', role: 'employee' },
    adnan: { password: '123', name: 'Abdul Adnan', role: 'employee' },
    admin: { password: '0000', name: 'Master Dashboard', role: 'admin' }
  };

  if (users[username] && users[username].password === password) {
    localStorage.setItem('employee', username);
    localStorage.setItem('name', users[username].name);
    localStorage.setItem('role', users[username].role);
    window.location = 'dashboard.html';
    return;
  }

  document.getElementById('error').innerText = 'Invalid Login';
}
