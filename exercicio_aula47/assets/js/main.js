(function () {
  let precision = 10; // milliseconds

  function getTimeFromMilliseconds(ms) {
    const d = new Date(ms * precision);
    return (
      d.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "UTC",
      }) + `.${d.getMilliseconds()}`.slice(0, 3)
    );
  }

  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");

  let sec = 0;
  let timer;
  let statusTimer = false;

  function iniciaRelogio() {
    timer = setInterval(function () {
      sec++;
      relogio.innerHTML = getTimeFromMilliseconds(sec);
    }, precision);

    statusTimer = true;

    relogio.classList.remove("pausado");
  }

  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("iniciar")) {
      if (!statusTimer) {
        iniciaRelogio();
      } else {
        console.log("Timer is already running...");
      }
      return;
    }
    if (el.classList.contains("pausar")) {
      if (statusTimer) {
        clearInterval(timer);
        statusTimer = false;
        relogio.classList.add("pausado");
      } else {
        console.log("Timer is already paused...");
      }
      return;
    }
    if (el.classList.contains("zerar")) {
      if (statusTimer) {
        clearInterval(timer);
        statusTimer = false;
      }
      relogio.innerHTML = getTimeFromMilliseconds(0);
      sec = 0;
      relogio.classList.remove("pausado");
      return;
    }
  });
})();
