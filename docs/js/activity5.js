function add(a, b) {
  return a + b;
}

document.getElementById('calculateBtn').addEventListener('click', function() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let sum = add(num1, num2);
  alert("The sum is: " + sum);
});
