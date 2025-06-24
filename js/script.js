function hitungLuas() {
  const alas = parseFloat(document.getElementById("luasAlas").value);
  const tinggi = parseFloat(document.getElementById("luasTinggi").value);
  const hasil = document.getElementById("luasHasil");

  if (alas > 0 && tinggi > 0) {
    const luas = 0.5 * alas * tinggi;
    hasil.textContent = `L = ½ × ${alas} × ${tinggi} = ${luas.toFixed(2)} cm²`;
  } else {
    hasil.textContent = "Masukkan nilai valid untuk alas dan tinggi!";
  }
}

function resetLuas() {
  document.getElementById("luasAlas").value = "";
  document.getElementById("luasTinggi").value = "";
  document.getElementById("luasHasil").textContent = "";
}

function hitungKeliling() {
  const a = parseFloat(document.getElementById("sisiA").value);
  const b = parseFloat(document.getElementById("sisiB").value);
  const c = parseFloat(document.getElementById("sisiC").value);
  const hasil = document.getElementById("kelilingHasil");

  if (a > 0 && b > 0 && c > 0) {
    const keliling = a + b + c;
    hasil.textContent = `K = ${a} + ${b} + ${c} = ${keliling.toFixed(2)} cm`;
  } else {
    hasil.textContent = "Masukkan nilai valid untuk semua sisi!";
  }
}

function resetKeliling() {
  document.getElementById("sisiA").value = "";
  document.getElementById("sisiB").value = "";
  document.getElementById("sisiC").value = "";
  document.getElementById("kelilingHasil").textContent = "";
}
// === DARK MODE TOGGLE ===
const themeToggle = document.getElementById('toggleTheme');
const userPref = localStorage.getItem('theme');

// Apply saved theme on load
if (userPref === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

