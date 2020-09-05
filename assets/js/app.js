Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};

var countDownDate = new Date("Sep 12, 2020 9:00:00").getTime();;
var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "OML you did ittt";
        alert("hurray!!!!");
    }
}, 1000);


var quotes = [
    'Lets go buddy',
    'Do your best',
    'Addiction is an adaptation. It’s not you. It’s the cage you live',
    'Become addicted to constant and never-ending self-improvement',
    'It’s going down into the abyss that we recover the treasures of life. Where you stumble, there lies your treasure',
    'Focus on where you want to go, not where you currently are',
    'Heal the heart, don’t hide the pain',
    'Healing doesn’t mean the damage never existed. It means the damage no longer controls our lives',
    'What is addiction really? It’s a sign, a signal, a symptom of distress. It’s a language that tells about a plight that must be understood ',
    'If you can quit for a day, you can quit for a lifetime',
    'Strength does not come from physical capacity. It comes from an indomitable will.',
    'Recovery is hard. Regret is harder',
    'You can’t defeat the darkness by keeping it caged inside of you',
    'Courage isn’t having the strength to go on – it is going on when you don’t have strength',
    'No matter how dark the night may get, your light will never burn out',
    'In the end, some of your greatest pains become your greatest strengths',
    'Believe you can and you’re halfway there',
    'Our greatest glory is not in never failing, but in rising up every time we fail',
    'It always seems impossible until it’s done',
    'Fall seven times, stand up eight',
    'You must do the things you think you cannot do',
    'You are someones sweetheart',
    'They need you',
    'We are with you buddy, always supporting you',
];
var randomNumber = Math.floor(Math.random() * quotes.length);
document.getElementById("quotes").innerHTML = quotes[randomNumber];