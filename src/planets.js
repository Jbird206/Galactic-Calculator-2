export class Solar {
  constructor(age) {
    this.age = age;
    this.lifeSpan = 82;
  }

  mercuryYears() {
    this.age = parseFloat((this.age / 0.24).toFixed(2));
    this.lifeSpan = parseFloat((this.lifeSpan / 0.24).toFixed(2));
    this.death = parseFloat(this.lifeSpan - this.age).toFixed(2);
  }

  venusYears() {
    this.age = parseFloat((this.age / 0.62).toFixed(2))
    this.lifeSpan = parseFloat((this.lifeSpan / 0.62).toFixed(2));
    this.death = parseFloat(this.lifeSpan - this.age).toFixed(2);
  }

  marsYears() {
    this.age = parseFloat((this.age / 1.88).toFixed(2));
    this.lifeSpan = parseFloat((this.lifeSpan / 1.88).toFixed(2));
    this.death = parseFloat(this.lifeSpan - this.age).toFixed(2);
  }

  jupiterYears() {
    this.age = parseFloat((this.age / 11.86).toFixed(2));
    this.lifeSpan = parseFloat((this.lifeSpan / 11.86).toFixed(2));
    this.death = parseFloat(this.lifeSpan - this.age).toFixed(2);
  }  

}