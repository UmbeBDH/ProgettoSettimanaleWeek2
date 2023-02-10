
    const display = document.getElementById("display");
      const btns = document.querySelectorAll(".btn");

      btns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
          let value = e.target.innerText;
          if (value === "C") {
            display.innerText = "";
          } else if (value === "=") {
            display.innerText = eval(display.innerText);
          } else {
            display.innerText += value;
          }
        });
      });
   