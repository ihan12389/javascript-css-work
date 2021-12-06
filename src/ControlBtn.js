class ControlBtn {
  constructor({ $app, applyChange }) {
    const $controlWrapper = document.createElement("div");
    $controlWrapper.className = "control-wrapper";

    const $controlBtn = document.createElement("input");
    this.$controlBtn = $controlBtn;
    $controlBtn.className = "control-btn";
    $controlBtn.type = "color";
    $controlWrapper.appendChild($controlBtn);
    $app.appendChild($controlWrapper);

    this.applyChange = applyChange;

    let target = "";
    this.target = target;

    this.mount();
  }

  changeColor = (color, target) => {
    if (color) {
      this.$controlBtn.value = `${color.trim()}`;
    }
    if (target) {
      this.target = target;
    }
  };

  mount() {
    document.querySelector(".control-btn").addEventListener("input", (e) => {
      if (this.target != "") {
        const el = document.querySelector(`.${this.target}`);

        switch (this.target) {
          case "item_1":
            document.documentElement.style.setProperty(
              "--item1-color",
              this.$controlBtn.value
            );
            break;
          case "item_2":
            document.documentElement.style.setProperty(
              "--item2-color",
              this.$controlBtn.value
            );
            break;
          case "item_3":
            document.documentElement.style.setProperty(
              "--item3-color",
              this.$controlBtn.value
            );
            break;
          case "item_4":
            document.documentElement.style.setProperty(
              "--item4-color",
              this.$controlBtn.value
            );
            break;
        }
      }
    });
  }
}
