function generateNeuraID() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < 5; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return 'NEURA-' + id;
}

document.getElementById('generateBtn').addEventListener('click', () => {
  const username = document.getElementById('username').value.trim();
  const card = document.getElementById('card');
  const downloadBtn = document.getElementById('downloadBtn');

  if (!username) {
    alert('Please enter your username first.');
    return;
  }

  const neuraId = generateNeuraID();
  document.getElementById('card-username').textContent = 'Username: ' + username;
  document.getElementById('card-id').textContent = 'Neura ID: ' + neuraId;

  card.style.display = 'block';
  downloadBtn.style.display = 'inline-block';

  // simpan data ke tombol download
  downloadBtn.onclick = () => downloadAsPNG(card, username);
});

function downloadAsPNG(element, username) {
  html2canvas(element, { backgroundColor: null }).then(canvas => {
    const link = document.createElement('a');
    link.download = `${username}_neura_id.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}
