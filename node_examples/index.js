const rect = require("./rect");

function solveRect(l, b) {
  console.log("Solving for rect with l = " + l + "and b =" + b);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log(
        `The are of the rect dimension l = ${l} and b = ${b} is ${rectangle.area} and the permiter is ${rectangle.perimeter}`
      );
    }
  });
  console.log(`This sts after the call to rect()`);
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
