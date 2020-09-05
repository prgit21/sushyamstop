Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
  };

  var countDownDate = new Date("Sep 12, 2020 9:00:00").getTime();;
  var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "OML you did ittt";
      alert("hurray!!!!");
    }
  }, 1000);


  var quotes=['Do your best','Bleh ','Bleh bleh'];
  var randomNumber = Math.floor(Math.random()*quotes.length);
  document.getElementById("quotes").innerHTML=quotes[randomNumber];
