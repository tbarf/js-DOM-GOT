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
mainDiv.className = "l-wrap";
main.appendChild(mainDiv);

for (var i = 0; i < kingdoms.length; i++) {
    var ChildDiv = document.createElement('div');
    ChildDiv.className = "three-col-grid" + i;
    mainDiv.appendChild(ChildDiv);

    var houseBox = document.createElement('div');
    houseBox.className = "grid-item";
    houseBox.id = "house" + i;
    houseBox.textContent = "Kingdom: " + kingdoms[i].house;
    ChildDiv.appendChild(houseBox);


    var sayingBox = document.createElement('div');
    sayingBox.className = "grid-item";
    sayingBox.id = "saying" + i;
    sayingBox.textContent = "Saying: " + kingdoms[i].saying;
    ChildDiv.appendChild(sayingBox);



    var crestBox = document.createElement('img');
    crestBox.id = "crest" + i;
    crestBox.className = "image";
    crestBox.src = kingdoms[i].crest;
    ChildDiv.appendChild(crestBox);


    var regionBox = document.createElement('div');
    regionBox.id = "region" + i;
    regionBox.className = "grid-item";
    regionBox.textContent = "Region: " + kingdoms[i].region;
    ChildDiv.appendChild(regionBox);
    var lordBox = document.createElement('div');
    lordBox.id = "lord" + i;
    lordBox.className = "grid-item";
    lordBox.textContent = "Lord: " + kingdoms[i].lord;
    ChildDiv.appendChild(lordBox);
    var allegianceBox = document.createElement('div');
    allegianceBox.id = "allegiance" + i;
    allegianceBox.className = "grid-item";
    allegianceBox.textContent = "Allegiance: " + kingdoms[i].allegiance;
    ChildDiv.appendChild(allegianceBox);
