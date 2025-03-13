(function () {
  const elementos = [
    { tag: "p", texto: "Frase 1" },
    { tag: "div", texto: "Frase 2" },
    { tag: "footer", texto: "Frase 3" },
    { tag: "section", texto: "Frase 4" },
  ];

  const s = document.querySelector(".container");
  const div = document.createElement("div");

  for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let el = document.createElement(tag);
    let tx = document.createTextNode(texto);

    el.appendChild(tx);
    div.appendChild(el);
  }

  s.appendChild(div);
})();
