/*Use the following data below to create cards for each Game of Thrones house (and if you aren't watching GOT, then you are missing out on half of life!) that will display in the browswer. Each card should have the following information:

image of the crest
House: House of Arryn
Region: The Vale of Arryn
Lord: Robin Arryn
Allegiance: House Stark

Please also use CSS to style up your work

*/
var kingdoms = [{
    crest: "https://vignette4.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153",
    house: "House Arryn",
    saying: "As High as Honor",
    region: "The Vale of Arryn",
    lord: "Robin Arryn",
    allegiance: "House Stark"
}, {
    crest: "https://vignette1.wikia.nocookie.net/gameofthrones/images/e/e6/House-Frey-Main-Shield.PNG/revision/latest?cb=20170523011255",
    house: "House Frey",
    saying: "We Stand Together",
    region: "The Riverlands",
    lord: "Unknown",
    allegiance: "House Lanister"
}, {
    crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836",
    house: "House Greyjoy",
    saying: " We Do Not Sow",
    region: "Iron Islands",
    lord: "King Euron Greyjoy",
    allegiance: "Sovereign"
}, {
    crest: "http://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/250px-House_Lannister.svg.png",
    house: "House Lannister",
    saying: "A Lannister always pays her debts",
    region: "The Crownlands",
    lord: "Queen Cersei",
    allegiance: "House Targaryen"
}, {
    crest: "http://vignette4.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142",
    house: "House Stark",
    saying: " Winter is Coming",
    region: "The North",
    lord: "King Jon Snow",
    allegiance: "Sovereign"
}, {
    crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320",
    house: "House Targaryen",
    saying: "Fire and Blood",
    region: "Dragonstone",
    lord: "Queen Daenerys",
    allegiance: "Sovereign"
}];


var main = document.body;

var mainDiv = document.createElement('div');
mainDiv.className = "flip-container";
main.appendChild(mainDiv);

for (var i = 0; i < kingdoms.length; i++) {
    var ChildDiv = document.createElement('div');
    ChildDiv.className = "flipper" + i;
    mainDiv.appendChild(ChildDiv);


    var front = document.createElement("div");
    front.className = "faceFront" + i;
    ChildDiv.appendChild(front);

var back = document.createElement("div");
    back.className = "faceBack" + i;
    ChildDiv.appendChild(back);

    var houseBox = document.createElement('div');
    houseBox.id = "house" + i;
    houseBox.textContent = "Kingdom: " + kingdoms[i].house;
    front.appendChild(houseBox);


    var sayingBox = document.createElement('div');
    sayingBox.id = "saying" + i;
    sayingBox.textContent = "Saying: " + kingdoms[i].saying;
    front.appendChild(sayingBox);



    var crestBox = document.createElement('img');
    crestBox.id = "crest" + i;
    crestBox.className = "image";
    crestBox.src = kingdoms[i].crest;
    front.appendChild(crestBox);


    var regionBox = document.createElement('div');
    regionBox.id = "region" + i;
    regionBox.textContent = "Region: " + kingdoms[i].region;
    front.appendChild(regionBox);
    var lordBox = document.createElement('div');
    lordBox.id = "lord" + i;
    lordBox.textContent = "Lord: " + kingdoms[i].lord;
    front.appendChild(lordBox);
    var allegianceBox = document.createElement('div');
    allegianceBox.id = "allegiance" + i;
    allegianceBox.textContent = "Allegiance: " + kingdoms[i].allegiance;
    front.appendChild(allegianceBox);
}