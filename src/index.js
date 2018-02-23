module.exports = function solveEquation(equation) {
  var a, b, c, x1, x2, D;
  var arr = equation.split(' ');
  var sol = [];

  a = arr[0];

  if(arr[3] == '-'){
      b = arr[4] * -1;
  }
  else{
      b = arr[4];
  }

  if(arr[7] == '-'){
      c = arr[8] * -1;
  }
  else{
      c = arr[8];
  }

  D = b * b - (4 * a * c);

  x1 = (b * -1 + Math.sqrt(D)) / (2 * a);
  x2 = (b * -1 - Math.sqrt(D)) / (2 * a);

  sol.push(Math.round(x1));
  sol.push(Math.round(x2));

  sol.sort(comp);

  return sol;
}

function comp(a, b){
    return a - b;
}
