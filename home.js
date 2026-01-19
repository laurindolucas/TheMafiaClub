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