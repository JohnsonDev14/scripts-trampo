// Função principal de copiar texto
function copyScript(btn) {

  // pega o card clicado
  const card = btn.closest('.card');

  // pega o texto do atributo data-script
  const text = card.dataset.script;

  // tenta copiar (navegadores modernos)
  navigator.clipboard.writeText(text).then(() => {

    showFeedback(btn, card);

  }).catch(() => {

    // fallback pra navegador jurássico
    fallbackCopy(text);
    showFeedback(btn, card);
  });
}

// feedback visual
function showFeedback(btn, card) {

  btn.textContent = "Copiado!";
  card.classList.add('copied');

  const toast = document.getElementById('toast');
  toast.classList.add('show');

  setTimeout(() => {
    btn.textContent = "Copiar";
    card.classList.remove('copied');
    toast.classList.remove('show');
  }, 1500);
}

// fallback antigo
function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");

  document.body.removeChild(textarea);
}

  function irParaTransferencia() {
    window.location.href = "nmp.html";
  }

    function irParaAtendimento() {
    window.location.href = "index.html";
  }