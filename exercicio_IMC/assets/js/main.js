(function () {
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputPeso = e.target.peso;
    const inputAltura = e.target.altura;

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso || peso < 2 || peso > 500) {
      setResultado("Peso inválido", false);
      return;
    }

    if (!altura || altura < 0.15 || altura > 3.5) {
      setResultado("Altura inválida", false);
      return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);
  });

  const getImc = (peso, altura) => {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
  };

  const getNivelImc = (imc) => {
    const niveis = [
      "Abaixo do peso",
      "Peso normal",
      "Sobrepeso",
      "Obesidade grau 1",
      "Obesidade grau 2",
      "Obesidade grau 3",
    ];

    if (imc < 18.5) return niveis[0];
    if (imc < 25) return niveis[1];
    if (imc < 30) return niveis[2];
    if (imc < 35) return niveis[3];
    if (imc < 40) return niveis[4];
    if (imc > 40) return niveis[5];

    return null;
  };

  function setResultado(msg, isValid) {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";

    const p = document.createElement("p");

    if (isValid) {
      p.classList.add("resultado-sucesso");
    } else {
      p.classList.add("resultado-falha");
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
  }
})();
