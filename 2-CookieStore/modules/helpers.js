export function addMessage(text) {
  const msg = document.getElementById('msg');
  msg.innerText += `- ${text}\n`;
}

export function clearMessages() {
  const msg = document.getElementById('msg');
  msg.innerText = '';
}

export function setText(text) {
  const txt = document.getElementById('txt');
  txt.innerText = text;
}

export function clearText() {
  const txt = document.getElementById('txt');
  txt.innerText = '';
}
