function getAverage(a, b, c) {
  var average = (a + b + c) / 3;
  console.log(average);
  return average;
}

var myResult = getAverage(3, 6, 9);
document.write("the average is " + myResult);
