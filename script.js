
var countDownDate = new Date("Mar 30, 2023 15:37:25").getTime();

var x = setInterval(function() {
  function adicionaZero(numero) {
    let num = String(numero)
    if (num.length < 2) {
      return num = "0" + num
    } else {
      return num
    }
  }

  var now = new Date().getTime();
  
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("count").innerHTML = adicionaZero(days) + " : " + adicionaZero(hours) + " : "
    + adicionaZero(minutes) + " : " + adicionaZero(seconds);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "EXPIRED";
  }
}, 1000);
