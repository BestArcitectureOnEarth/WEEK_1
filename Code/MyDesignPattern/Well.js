//Singleton

class WellSingleton {
  static instance = null;

  constructor() {
    if (!WellSingleton.instance) {
      this.water = 1000;
      WellSingleton.instance = this;
    }
    return WellSingleton.instance;
  }

  drawWater(water) {
    if (this.water < water) {
      return "남은 물이 부족합니다!";
    } else this.water = this.water - water;
  }

  remainingWater() {
    return this.water;
  }
}

const Jack = new WellSingleton();
Jack.drawWater(200);
console.log(Jack.remainingWater()); // 800

const Mike = new WellSingleton();
Mike.drawWater(500);
console.log(Mike.remainingWater()); // 300
console.log(Mike.drawWater(500)); // "남은 물이 부족합니다!"
