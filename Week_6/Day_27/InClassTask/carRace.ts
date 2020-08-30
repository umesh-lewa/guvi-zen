type CarDirection = "LEFT" | "RIGHT" | "FORWARD" | "REVERSE";
interface CarLocation {
     lat : number,
     long : number
}
class Race {
  partcipents: Car[] = [];
  winner: Car;
  constructor() {
    for (let index = 0; index < 10; index++) {
      this.partcipents.push(new Car(`Car ${index + 1}`));
    }
  }

  getParticepents() {
    return this.partcipents;
  }

  start() {
    this.partcipents.forEach((car: Car) => {
      car.speed = Math.floor(Math.random() * 1000);
      car.move("LEFT");
      car.location({
        lat: 12.555,
        long: 34.898,
      });
    });
  }

  getResult() {
    let winnerCar: Car;
    let highSpeed = 0;
    this.partcipents.forEach((car: Car) => {
      if (car.speed > highSpeed) {
        highSpeed = car.speed;
        winnerCar = car;
      }
    });
    this.winner = winnerCar;
    return this.winner;
  }
}

class Car {
  name;
  brand;
  speed;

  constructor(carName) {
    this.name = carName;
  }
  move(direction: CarDirection) {
    console.log(`${this.name} is moving in ${direction} direction`);
  }

  location(location:CarLocation) {}
}

let race1 = new Race();
race1.start();
console.log(race1.getParticepents());
console.log(race1.getResult());