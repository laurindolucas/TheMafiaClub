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
        jhen: `Vitor,
                Falar de você é, sem dúvida, a parte mais fácil. Afinal, você é meu irmão.
                Sou muito, muito feliz por ter meu irmão inserido no meu grupo de amigos. É algo que considero raro e muito especial.
                Além de sermos próximos como irmãos, somos amigos de verdade. Compartilhamos risadas, conversas, momentos e até as mesmas pessoas ao nosso redor. Dividir não só o sangue, mas também as amizades, torna tudo mais leve e mais forte.
                Pensando bem, não teria como ser diferente. Você sempre fez parte, sempre esteve ali, e isso é algo que eu valorizo demais. Ter você por perto, tanto como irmão quanto como amigo, é uma das coisas que me deixam mais segura e grata.
                Obrigada por ser quem você é, por estar presente e por fazer parte da minha vida e do meu grupo de um jeito tão natural. Tenho um carinho enorme por você`,
        
        caio: "Caio → Vitor: Você sempre esteve comigo.",
        livia: `Vitor, Dale vitão genio incompreendido primeiro queria começar dizendo que és super inteligente e admiro isso em tu, ainda por cima tens talento nas cenas que fazes, e um sorriso contagiante boy acho que a gente nunca ficou muito tempo conversando so eu e tu, mas tlgd que tu é uma pessoa massa pra trocar ideia e tambem sempre tens alguma coisa inconica pra dizer. Espero que conquistes tudo o que almeijas e continua assim pow lutando a cada dia sem perder o foco e acredita no potencial que tu tem e pra cima, bora!`,
        vini: "Vini → Vitor: Seguimos juntos sempre."
    },

    jhen: {
        vitor:``,
        caio: ``,
        livia: `Jhen, jhen Sou muito feliz por ter te conhecido, ainda lembro-me do dia logo de cara voce foi super extrovertida e simpatica uma queridaaa na hora eu já amiguei, alem de linda é simpatica Obrigada por seres quem és, por seres super humilde e tranquila, sem frescura. Seu coração é muito lindo e quem dera todas as mulheres fossem assim ia acabar a rivalidads feminina. Sinceramente é a única amiga que eu nunca briguei, pelo menos nao lembro da gente ter discutido nenhuma vez, isso mostra que tu é muito dboa e tranquila, tipo mesmo se houver uma coisa errada tu nao é daquelas que parte pra briga. Resumindo oque eu quero dizer, voce é uma amg amg pq nao fica discutjndo nem enfraquecendo a amzd atoa, to a falar isso porque normalmente minhas amizades com mulher sempre tem muita picuinha entao fico feliz de poder ter ums amiga que faz a diferença `,
        vini: ``
    },

    caio: {
        vitor: ``,
        jhen: `Caio,
                Difícil é falar da máfia e não falar de Caio. tudo sempre foi na casa de caio, nossos encontros, tudo foi meio q só possível por causa dele. mas falar de caio, individualmente, é complicado. quando nossa amizade começou, tivemos muita desavenças, a tal da “opinião forte” e mesmo assim vc foi a pessoa q manteve o grupo unido e fez as conexão acontecer. amadurecemos juntos, nos aconselhamos e no final, vc se tornou uma pessoa que eu realmente quero ter por perto, pra sempre. 
                sou grata por termos amadurecidos juntos. começamos como só duas pessoas que gostaria de entrar em uma escola técnica e agora termos uma amizade muito forte. eu amo você`,
        livia: `Caio,
O indigena mais inteligente da tribo, se ainda existisse escravidão tu que ia libertar os indios. Tu é uma pessoa muito humana, o que eu quero dizer com isso é que tens coração, mesmo sendo cabeça dura as vezes, tens um coração cheio de amor e empatia, vais comseguir tudo o que planejas e ainda mais e melhor, parabens pelo seu esforço e força de vontade, teu empenho é de se inspirar esse grupo só existe por tua causa, e esse site tambem mostrando que além de criares coisas tu insistes e és leal, porque se fosses terias desistido da máfia há muito tempo e tenho certeza que nao faltou motivo, e gracas a tu esse grupo se tornou mais que so um grupo de wpp, mas sim uma familia, provando que com lealdade e dedicacao os vinculos permanecem e se fortalecem. Espero que tenhas em mente o teu valor e que Deus te abençoe `,
        vini:``
    },

    livia: {
        vitor:``,
        jhen: `Lívia.Com toda certeza, você é a mais improvável do grupo. E talvez por isso mesmo, uma das mais especiais. Mesmo depois de toda a “confusão”, você ainda assim conseguiu ser nossa amiga, e isso diz muito sobre você e sobre a nossa amizade.A distância nunca vai significar afastamento, não pra gente. Não importa onde você esteja, você nunca será distante da gente. Você faz parte, sempre fez, e sempre vai fazer.Você virou a nossa riquinha do grupo, mas muito além das brincadeiras. Sou muito grata por você ter ficado, por ter escolhido fazer parte da gente, mesmo quando parecia improvável.  só teve q acontecer`,
        caio:``,
        vini: ``
    },

    vini: {
        vitor: ``,
        jhen: `Vini,
                Se alguém me dissesse lá atrás que eu e você faríamos parte do mesmo grupo de amigos, eu provavelmente não acreditaria. A vida tem dessas coisas inesperadas, e ainda bem.
                Você se tornou um amigo, e um ótimo amigo. Daqueles que chegam aos poucos, mas ficam. Sua presença no grupo fez tudo ganhar mais equilíbrio, mais leveza e mais sentido.
                Mesmo sem grandes planos ou expectativas no começo, a nossa amizade foi se construindo de forma natural. E hoje eu fico muito feliz por dividir momentos, conversas e risadas com você.`,
        caio: ``,
        livia: `Vini,  De napolitano nao é so as cores o coração também é gelado igual o sorvete. Gosto bue da tua amizade pq tu é muito engraçado, é compreensível tambem uma pessoa que da psa falar sobre qualquer assunto sem medo, eu so espero que tu ganhe mais juizo na tua vida e escolha uma mulher que preste, porque te conhecendo sei que vai ser dificil. Mas obrigada por seres como és, teu jeito torna as coisas mais leve, eu acho que tu é aquilo tipo de pessoa que se voce passar por uma situacao ruim contigo ainda sai dando risada, entao nao deixa nada te colocar pra baixo.`
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
