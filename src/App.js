console.log("App is running!");

class App {
  $app = null;

  constructor($app) {
    this.$app = $app;
    // control button을 생성합니다.
    this.controlBtn = new ControlBtn({ $app });
    // header를 생성합니다.
    this.header = new Header({
      $app,
      onClick: (color, target) => {
        this.controlBtn.changeColor(color, target);
      },
    });
  }
}
