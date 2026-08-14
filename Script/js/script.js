const scripts = {
  "abertura-manha": [
    "Olá bom dia! Como posso ajudar?",
    "Bom dia! O que posso fazer por você hoje?",
    "Ótimo dia! O que posso fazer para ajudar?",
    "Olá! Bom dia. Como posso ajudá-lo?",
    "Bom dia! Como posso auxiliar você?"
  ],

  "abertura-tarde": [
    "Olá boa tarde! Como posso ajudar?",
    "Boa tarde! O que posso fazer por você hoje?",
    "Ótima tarde! Como posso ajudar?",
    "Olá! Boa tarde. Como posso auxiliá-lo(a)?",
    "Boa tarde! Em que posso ajudar?"
  ],

  "tecnico-manutencao": [
    "Entendo. Poderia me passar o AnyDesk para eu dar uma verificada, por favor?",
    "Certo. Poderia me enviar o AnyDesk para que eu possa verificar o problema?",
    "Entendi. Pode me passar o AnyDesk para que eu possa analisar o ocorrido?"
  ],

  "tecnico-instalacao": [
    "Entendo. Poderia me passar o AnyDesk para eu prosseguir com a instalação, por favor?",
    "Certo. Poderia me enviar o AnyDesk para que eu possa realizar a instalação?",
    "Entendi. Me passe o AnyDesk, por favor, para que eu possa prosseguir com a instalação."
  ],

  "finalizacao": [
    "Fico feliz em ter ajudado! Sempre que precisar, pode contar conosco novamente. E, se possível, não esqueça de avaliar o atendimento positivamente.",
    "Fico feliz por ter ajudado! Caso precise novamente, estaremos à disposição. Se puder, lembre-se de deixar uma avaliação positiva para o nosso atendimento, por favor!",
    "Foi um prazer ajudar! Sempre que precisar, pode contar conosco. Se possível, deixa uma nota positiva para a gente? Isso nos ajuda bastante!",
    "Foi um prazer atendê-lo(a). Permanecemos à disposição sempre que precisar. Se possível, considere nos deixar uma avaliação positiva. Seu feedback é fundamental para o nosso crescimento!"
  ]
};


function copyScript(btn) {

  const card = btn.closest(".card");

  const category = card.dataset.category;

  const options = scripts[category];

  const randomIndex = Math.floor(Math.random() * options.length);

  const text = options[randomIndex];

  navigator.clipboard.writeText(text).then(() => {

    showFeedback(btn, card);

  }).catch(() => {

    fallbackCopy(text);
    showFeedback(btn, card);

  });
}


function showFeedback(btn, card) {

  btn.textContent = "Copiado!";
  card.classList.add("copied");

  const toast = document.getElementById("toast");

  toast.classList.add("show");

  setTimeout(() => {

    btn.textContent = "Copiar";
    card.classList.remove("copied");
    toast.classList.remove("show");

  }, 1500);
}


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

function verificarHorario() {

  const agora = new Date();
  const hora = agora.getHours();

  const cardManha = document.getElementById("card-manha");
  const cardTarde = document.getElementById("card-tarde");

  if (hora < 12) {

    // Antes do meio-dia
    cardManha.style.display = "";
    cardTarde.style.display = "none";

  } else {

    // Meio-dia em diante
    cardManha.style.display = "none";
    cardTarde.style.display = "";
  }
}
verificarHorario();
setInterval(verificarHorario, 60000);