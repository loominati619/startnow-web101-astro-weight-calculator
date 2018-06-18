var planets = [
    ['Sun', 27.9],
    ['Mercury', 0.377],
    ['Venus', 0.9032],
    ['Earth', 1],
    ['Moon', 0.1655],
    ['Mars', 0.3895],
    ['Jupiter', 2.640],
    ['Saturn', 1.139],
    ['Uranus', 0.917],
    ['Neptune', 1.148],
    ['Pluto', 0.06],
];

var planetSelectDropdown = document.getElementById("planets");

planets.forEach(function(item) {
    var name = item[0];
    var option = document.createElement("option");
    option.text = name;
    option.value = name;
    planetSelectDropdown.appendChild(option);
})



function calculateWeight(weight, planetName) {
    var correctPlanet = planets.find(function(item) {
        return item[0] === planetName;
    });

    var planetWeight = correctPlanet[1];

    return weight * planetWeight
}

// BONUS

function hidePluto() {
    //Get #planets from index.html
    var planetsElement = document.getElementById('planets');

    //if pluto is inside planetsElement
    if (planetsElement.options[10]) {
        //remove pluto
        planetsElement.removeChild(planetsElement.options[10]);
    } else {
        var option = document.createElement("option");
        option.text = 'Pluto';
        option.value = 'Pluto';
        planetsElement.appendChild(option);
    }

}

function handleClickEvent(e) {
    var userWeight = document.getElementById("user-weight").value;
    var planetName = document.getElementById("planets").value;
    var result = calculateWeight(userWeight, planetName);
    document.getElementById("output").innerHTML = "If you were on " + (planetName) + ", you would weigh " + (result) + "lbs!";
}
document.getElementById('calculate-button').addEventListener("click", handleClickEvent);

document.getElementById("pluto-button").addEventListener("click", hidePluto)