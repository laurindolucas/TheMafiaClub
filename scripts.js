function calcularDiferencaData(inicial, final) {
      let anos = final.getFullYear() - inicial.getFullYear();
      let meses = final.getMonth() - inicial.getMonth();
      let dias = final.getDate() - inicial.getDate();

      if (dias < 0) {
        meses--;
        const mesAnterior = new Date(final.getFullYear(), final.getMonth(), 0);
        dias += mesAnterior.getDate();
      }

      if (meses < 0) {
        anos--;
        meses += 12;
      }

      return { anos, meses, dias };
    }

    function atualizarContagem() {
      const hoje = new Date();
      const dataAlvo = new Date("2030-01-01");

      const { anos, meses, dias } = calcularDiferencaData(hoje, dataAlvo);

      document.getElementById("anos").textContent = anos;
      document.getElementById("meses").textContent = meses;
      document.getElementById("dias").textContent = dias;
    }

    atualizarContagem();
    setInterval(atualizarContagem, 1000 * 60 * 60 * 12);
   

