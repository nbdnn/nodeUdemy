(function () {
  const header = document.querySelector(".container h1");
  const data = new Date();
  // const opcoes = {
  //   dateStyle: "full",
  //   timeStyle: "short"
  // };

  // header.innerHTML = data.toLocaleString("pt-BR", opcoes);
  header.innerHTML = data.toLocaleString("pt-BR", {
    dateStyle: "full",
    timeStyle: "short",
  });
})();
