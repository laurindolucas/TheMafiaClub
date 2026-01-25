function atualizarHoras() {
    const agora = new Date();

    document.getElementById("br-time").textContent =
        agora.toLocaleTimeString("pt-BR", {
            timeZone: "America/Sao_Paulo",
            hour: "2-digit",
            minute: "2-digit"
        });

    document.getElementById("pt-time").textContent =
        agora.toLocaleTimeString("pt-BR", {
            timeZone: "Europe/lisbon",
            hour: "2-digit",
            minute: "2-digit"
        });

    document.getElementById("it-time").textContent =
        agora.toLocaleTimeString("pt-BR", {
            timeZone: "Europe/rome",
            hour: "2-digit",
            minute: "2-digit"
        });
}

setInterval(atualizarHoras, 1000);
atualizarHoras();

const cards = document.querySelectorAll(".cartas-card");

const modal = document.getElementById("modal-cartas");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const buttonsArea = document.getElementById("modal-buttons");
const letterArea = document.getElementById("modal-letter");

const letters = {

    vitor: {
        jhen: "Jhen → Vitor: Obrigado por tudo, irmão.",
        caio: "Caio → Vitor: Você sempre esteve comigo.",
        livia: "Lívia → Vitor: Nunca vou esquecer nossa amizade.",
        vini: "Vini → Vitor: Seguimos juntos sempre."
    },

    jhen: {
        vitor: "Vitor → Jhen: Você é essencial pra nós.",
        caio: "Caio → Jhen: Obrigado por cada conselho.",
        livia: "Lívia → Jhen: Te levo no coração.",
        vini: "Vini → Jhen: Conta comigo sempre."
    },

    caio: {
        vitor: "Vitor → Caio: Sem você nada disso existiria.",
        jhen: "Jhen → Caio: Orgulho de você.",
        livia: "Lívia → Caio: Obrigada por tudo.",
        vini: "Vini → Caio: Sempre juntos."
    },

    livia: {
        vitor: "Vitor → Lívia: Você é especial pra gente.",
        jhen: "Jhen → Lívia: Obrigada pela amizade.",
        caio: "Caio → Lívia: Nunca esqueça disso.",
        vini: "Vini → Lívia: Você é incrível."
    },

    vini: {
        vitor: "Vitor → Vini: Nosso laço é eterno.",
        jhen: "Jhen → Vini: Conte comigo.",
        caio: "Caio → Vini: Você é família.",
        livia: "Lívia → Vini: Obrigada por tudo."
    }

};

let currentUser = "";

cards.forEach(card => {

    card.addEventListener("click", () => {

        currentUser = card.dataset.user;

        modal.classList.add("active");

        modalTitle.innerText =
            "Cartas para " + currentUser.toUpperCase();

        buttonsArea.innerHTML = "";
        letterArea.innerHTML = "<p>Selecione uma carta 👆</p>";

        const userLetters = letters[currentUser];

        for (let sender in userLetters) {

            const btn = document.createElement("button");

            btn.innerText =
                sender.charAt(0).toUpperCase() + sender.slice(1);

            btn.addEventListener("click", () => {
                letterArea.innerHTML = `
                    <p>${userLetters[sender]}</p>
                `;
            });

            buttonsArea.appendChild(btn);
        }

    });

});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});
