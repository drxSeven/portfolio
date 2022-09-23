

function giveFact(){
    let facts = ["a dime has 118 ridges on its edge.", "a tiger's stripes aren't just fur deep! Their markings also appear on their skin!",
     "the tallest man ever recorded stood 8 feet 11 inches!",
     "Colossal squid are the heaviest living invertebrate on earth weighing up to 1,091 lbs(495 kg)!",
     "there are over seven hundred dog breeds across the world!",
      "the Earl of Sandwich, reportedly invented the sandwich so he wouldn’t have to leave his gambling table to eat!",
    "according to research done by universities, it takes anywhere from 252 to 411 licks to get to the center of a tootsie pop!"]
    
    let rElement = facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("answers").innerHTML = rElement;
}

