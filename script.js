document.getElementById('pensionForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  var Y = parseFloat(document.getElementById('Y').value);
  var A = 2816091;
  var X = 1.2;
  var B = parseFloat(document.getElementById('B').value) * 10000;
  var n = parseFloat(document.getElementById('n').value);
  var n = parseFloat(document.getElementById('n').value);
  var year = parseInt(document.getElementById('year').value);

  if (B >= 5900000) {
    B = 5900000
  } else if (B <= 370000) {
    B = 370000
  }

  if (year>=1988 && year <= 1998){
    var pension = 2.4 * (A + 0.75 * B) * (1 + 0.05 * n) / 12;
  } else if (year >= 1999 && year <=2007){
    pension = 1.8 * (A + B) * (1 + 0.05 * n) / 12;
  } else if (year >=2008) {
    pension = X * (A + B) * (1 + 0.05 * n) / 12;
  } else {
    alert("국민연금제도는 1988년부터 시행되었습니다");
  }

  if (Y<=1952){
    var SY = Y + 60;
  }else if (Y>=1953 && Y<=1956){
    SY = Y + 61;
  }else if (Y>=1957 && Y<=1960){
    SY = Y + 62;
  }else if (Y>=1961 && Y<=1964){
    SY = Y + 63;
  }else if (Y>=1965 && Y<=1968){
    SY = Y + 64;
  }else if (Y>=1969){
    SY = Y + 65;
  }

  document.getElementById('cost').innerText = B * 0.09 + '원';
  document.getElementById('total').innerText = B * 0.09 * 12 * (20 + n) + '원';
  document.getElementById('result').innerText = (pension.toFixed(0)).toLocaleString('ko-KR') + '원';
  document.getElementById('age').innerText = SY + '년';
  document.getElementById('sonik').innerText =  Math.floor((B * 0.09 * 12 * (20 + n)) / (pension * 12))+ Y + 60 + '년';
});
