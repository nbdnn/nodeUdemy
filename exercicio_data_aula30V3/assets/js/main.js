(function () {
  const header = document.querySelector(".container h1");
  const data = new Date();

  header.innerHTML = formataData(data);

  function getDayOfWeek(weekDay) {
    const weekDays = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    return weekDays[weekDay];
  }

  function getMonthStr(monthInt) {
    const months = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
    ];
    return months[monthInt];
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
