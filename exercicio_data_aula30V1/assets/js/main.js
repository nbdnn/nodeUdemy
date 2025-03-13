(function () {
  const header = document.querySelector(".container h1");
  const data = new Date();

  header.innerHTML = formataData(data);

  function getDayOfWeek(weekDay) {
    let diaSemana;

    switch (weekDay) {
      case 0:
        diaSemana = "Doming";
        return diaSemana;

      case 1:
        diaSemana = "Segunda-feira";
        return diaSemana;

      case 2:
        diaSemana = "Terça-feira";
        return diaSemana;

      case 3:
        diaSemana = "Quarta-feira";
        return diaSemana;

      case 4:
        diaSemana = "Quinta-feira";
        return diaSemana;

      case 5:
        diaSemana = "Sexta-feira";
        return diaSemana;

      case 6:
        diaSemana = "Sábado";
        return diaSemana;

      default:
        diaSemana = "Inválido";
        return diaSemana;
    }
  }

  function getMonthStr(monthInt) {
    let month;

    switch (monthInt) {
      case 0:
        month = "janeiro";
        return month;

      case 1:
        month = "fevereiro";
        return month;

      case 2:
        month = "março";
        return month;

      case 3:
        month = "abril";
        return month;

      case 4:
        month = "maio";
        return month;

      case 5:
        month = "junho";
        return month;

      case 6:
        month = "julho";
        return month;

      case 7:
        month = "agosto";
        return month;

      case 8:
        month = "setembro";
        return month;

      case 9:
        month = "outubro";
        return month;

      case 10:
        month = "novembro";
        return month;

      case 11:
        month = "dezembro";
        return month;

      default:
        month = "Inválido";
        return month;
    }
  }

  function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
  }

  function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    // const seg = zeroAEsquerda(data.getSeconds());

    return `${getDayOfWeek(data.getDay())},
     ${dia} de ${getMonthStr(mes)} de ${ano}</br>${hora}:${min}`;
  }
})();
