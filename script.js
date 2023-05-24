document.getElementById('pensionForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var Y = parseFloat(document.getElementById('Y').value);
  var A = 2816091;
  var X = 1.25;
  var B = parseFloat(document.getElementById('B').value) * 10000;
  var n = parseFloat(document.getElementById('n').value);
  var year = parseInt(document.getElementById('year').value);

  if (B >= 5900000) {
    B = 5900000
  } else if (B <= 370000) {
    B = 370000
  }

  if (year >= 1988 && year <= 1998) {
    var pension = (2.4 * (A + 0.75 * B) * (1 + 0.05 * n) / 12)*((1998-year+1)/(n+20)) + (1.8 * (A + B) * (1 + 0.05 * n) / 12) * ((2007-1999+1)/(n+20)) + (X * (A + B) * (1 + 0.05 * n) / 12) * ((year+n+20-2008+1)/(n+20));
  } else if (year >= 1999 && year <= 2007) {
    pension = (1.8 * (A + B) * (1 + 0.05 * n) / 12) * ((2007-year+1)/(n+20)) + (X * (A + B) * (1 + 0.05 * n) / 12) * ((year+n+20-2008+1)/(n+20));
  } else if (year >= 2008) {
    pension = (X * (A + B) * (1 + 0.05 * n) / 12);
  } else {
    alert("국민연금제도는 1988년부터 시행되었습니다");
  }

  if (Y <= 1952) {
    var SY = Y + 60;
  } else if (Y >= 1953 && Y <= 1956) {
    SY = Y + 61;
  } else if (Y >= 1957 && Y <= 1960) {
    SY = Y + 62;
  } else if (Y >= 1961 && Y <= 1964) {
    SY = Y + 63;
  } else if (Y >= 1965 && Y <= 1968) {
    SY = Y + 64;
  } else if (Y >= 1969) {
    SY = Y + 65;
  }

  var month_tax = B * 0.09;
  var total = month_tax * 12 * (20 + n);
  var month_recipt = (pension.toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  document.getElementById('cost').innerText = (month_tax).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
  document.getElementById('total').innerText = (total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
  document.getElementById('age').innerText = SY + '년';
  document.getElementById('result').innerText = month_recipt + '원';
  document.getElementById('sonik').innerText = Math.floor((total) / (pension * 12)) + SY + '년';
});
