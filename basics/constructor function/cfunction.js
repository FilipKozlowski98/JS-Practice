var Car = function (maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function (speed, time) {
    document.write(speed * time + " ");
  };
  this.writeDriver = function () {
    document.write("driver name is " + this.driver);
  };
};

var myCar = new Car(10, "driver1");
var myCar2 = new Car(20, "driver2");
var myCar3 = new Car(30, "driver3");
var myCar4 = new Car(40, "driver4");

myCar.drive(10, 5);
myCar2.writeDriver();
document.write(" " + myCar4.maxSpeed);
