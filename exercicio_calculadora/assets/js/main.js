// // Factory function

// (function () {
//   function createCalculator() {
//     return {
//       display: document.querySelector(".display"),

//       start() {
//         this.clickBtns();
//         this.enterPress();
//       },

//       clearDisplay() {
//         this.display.value = "";
//       },

//       deleteOne() {
//         this.display.value = this.display.value.slice(0, -1);
//       },

//       calculate() {
//         let conta = this.display.value;
//         try {
//           conta = eval(conta);

//           if (!conta) {
//             alert("Conta inválida");
//             return;
//           }

//           this.display.value = conta;
//           return;
//         } catch (e) {
//           alert("Conta inválida");
//           return;
//         }
//       },

//       clickBtns() {
//         // this -> calculator
//         document.addEventListener("click", (e) => {
//           // arrow function don't modify the 'this'
//           const el = e.target;

//           if (el.classList.contains("btn-num")) {
//             this.btnToDisplay(el.innerText);
//             return;
//           }

//           if (el.classList.contains("btn-clear")) {
//             this.clearDisplay();
//             return;
//           }

//           if (el.classList.contains("btn-del")) {
//             this.deleteOne();
//             return;
//           }

//           if (el.classList.contains("btn-eq")) {
//             this.calculate();
//             return;
//           }
//         });
//       },

//       enterPress() {
//         this.display.addEventListener("keypress", (e) => {
//           if (e.keyCode === 13) {
//             this.calculate();
//           }
//         });
//       },

//       btnToDisplay(value) {
//         this.display.value += value;
//       },
//     };
//   }

//   const calculator = createCalculator();
//   calculator.start();
// })();

// Constructor function
(function () {
  function Calculator() {
    const display = document.querySelector(".display");

    this.start = () => {
      captureClickBtns();
      captureEnterPress();
    };

    const clearDisplay = () => (display.value = "");
    const deleteOne = () => (display.value = display.value.slice(0, -1));
    const btnToDisplay = (el) => {
      display.value += el.innerText;
      display.focus();
    };

    const captureEnterPress = () => {
      display.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) calculate();
      });
    };

    const captureClickBtns = () => {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) btnToDisplay(el);
        if (el.classList.contains("btn-clear")) clearDisplay();
        if (el.classList.contains("btn-del")) deleteOne();
        if (el.classList.contains("btn-eq")) calculate();
      });
    };

    const calculate = () => {
      try {
        const conta = eval(display.value);

        if (!conta) {
          alert("Conta inválida");
          return;
        }

        display.value = conta;
      } catch (e) {
        alert("Conta inválida");
      }
    };
  }

  const calculator = new Calculator();
  calculator.start();
})();
