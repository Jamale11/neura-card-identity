function generateNeuraID() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < 5; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return 'NEURA-' + id;
}

document.getElementById('generateBtn').addEventListener('click', () => {
  const output = document.getElementById('output');
  const newId = generateNeuraID();
  output.textContent = newId;
});
