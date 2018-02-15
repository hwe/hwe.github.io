function countdown() {
var restaurants = ["zur Markthalle", "zum Suppenladen", "zu Lieblingsplatz", "zu Andronacco", "zum Schanzenb\u00e4cker"];
var rand = Math.floor(Math.random()*9);
switch (rand) {
  case 0:
  case 1:
    var index = 0;  
    break;
  case 2:
  case 3:
    var index = 1;
    break;
  case 4:
    var index = 2;
    break;
  case 5:
    var index = 3;
    break;
  default:
    var index = 4;
    break;
}

var today_restaurant = restaurants[index];
var date = new Date();
var weekday = date.getDay();

// Set the counter start value
var counter = 6;
// Update the count down every 1 second
var x = setInterval(function() {
  counter--;
  // Display the result in the element with id="demo"
  if(counter > 0) {
    document.getElementById("demo").innerHTML = "Gib mir noch " + counter + " Sekunden ...";
  }

  // If the count down is at 1 use singular
  if (counter == 1) {
    document.getElementById("demo").innerHTML = "Gib mir noch " + counter + " Sekunde ...";
  }

  // If the count down is finished, write some text 
  else if (counter == 0) {
    clearInterval(x);
    if (weekday == 2) {
    	document.getElementById("demo").innerHTML = "Heute geht es zum Markt <br/><br/> (Mir doch egal, ob es regnet oder schneit!)";
    } else {
    	document.getElementById("demo").innerHTML = "Heute geht es " + today_restaurant;
    }
  }
}, 1000);
}
countdown();