document.getElementById('pensionForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var A = 2816091;
  var X = 1.275;
  var B = parseFloat(document.getElementById('B').value);
  var n = parseFloat(document.getElementById('n').value);
  if (B >= 5900000) {
    B = 5900000
  } else if (B <= 370000) {
    B = 370000
  }

  var pension = X * (A + B) * (1 + 0.05 * n / 12) / 12;

  document.getElementById('result').innerText = (pension.toFixed(0)).toLocaleString('ko-KR') + '원';
});
