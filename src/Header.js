class Header {
  $headerUl = null;
  $app = null;

  constructor({ $app, onClick }) {
    this.$headerUl = document.createElement("ul");
    this.$headerUl.className = "header-ul";
    this.$app = $app;

    this.onClick = onClick;

    this.render();
  }

  render() {
    const $item1 = document.createElement("li");
    $item1.className = "item_1";
    const $item1_text = document.createElement("span");
    $item1_text.innerText = "ITEM1";
    $item1.appendChild($item1_text);

    const $item2 = document.createElement("li");
    $item2.className = "item_2";
    const $item2_text = document.createElement("span");
    $item2_text.innerText = "ITEM2";
    $item2.appendChild($item2_text);

    const $item3 = document.createElement("li");
    $item3.className = "item_3";
    const $item3_text = document.createElement("span");
    $item3_text.innerText = "ITEM3";
    $item3.appendChild($item3_text);

    const $item4 = document.createElement("li");
    $item4.className = "item_4";
    const $item4_text = document.createElement("span");
    $item4_text.innerText = "ITEM4";
    $item4.appendChild($item4_text);

    this.$headerUl.appendChild($item1);
    this.$headerUl.appendChild($item2);
    this.$headerUl.appendChild($item3);
    this.$headerUl.appendChild($item4);

    this.$app.appendChild(this.$headerUl);

    document.addEventListener("click", (e) => {
      let color = null;

      switch (e.target.className) {
        case "item_1":
          color = getComputedStyle(document.documentElement).getPropertyValue(
            "--item1-color"
          );
          break;
        case "item_2":
          color = getComputedStyle(document.documentElement).getPropertyValue(
            "--item2-color"
          );
          break;
        case "item_3":
          color = getComputedStyle(document.documentElement).getPropertyValue(
            "--item3-color"
          );
          break;
        case "item_4":
          color = getComputedStyle(document.documentElement).getPropertyValue(
            "--item4-color"
          );
          break;
        default:
          return;
      }

      this.onClick(color, e.target.className);

      return color;
    });
  }
}
