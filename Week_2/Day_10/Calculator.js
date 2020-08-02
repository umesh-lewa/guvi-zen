class Calculator {
  constructor(v1, v2) {
    this.v1 = v1;
    this.v2 = v2;
  }

  add() {
    return this.v1 + this.v2;
  }
  sub() {
    return this.v1 - this.v2;
  }
  mul() {
    return this.v1 * this.v2;
  }
}


const calc = new Calculator(20, 10);
console.log(calc.add());
console.log(calc.sub());
console.log(calc.mul());