class Circle {
  constructor (radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2 * this.radius;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  get area() {
    return Math.PI * (this.radius ** 2);
  }

  set diameter(newDiameter) {
    this.radius = newDiameter/2;
  }

  set circumference(newCircumference) {
    this.radius = newCircumference/(2*Math.PI);
  }

//   set area(newArea){
//     this.diameter = newArea/Math.PI;
//     this.radius = this.diameter/2;
//     this.circumference = 2*Math.PI*sqrt(newArea/Math.PI);
//   }

}//class