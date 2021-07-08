var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Filip";
myCar.drive = function () {
  document.write("now driving");
};

myCar.drive();

var myCar2 = {
  maxSpeed: 70,
  driver: "Robert",
  drive: function (speed, time) {
    document.write(" " + speed * time);
  },
};

myCar2.drive(20, 5);

document.write(" " + myCar.driver);
