function searchHero() {
    const input = document.getElementById("search-input");
    const superheroName = input.value.trim(); // Retrieve input value

    if (!superheroName) {
        alert("Please enter a superhero name!");
        return;
    }

    const imageDiv = document.getElementById("image");
    imageDiv.style.opacity = "0"; // Reset opacity

    fetch(`https://superheroapi.com/api.php/8dc9510d2747c10c0b306f9c02a6605d/search/${superheroName}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Handle no results or errors in data
            if (!data || !data.results || data.results.length === 0) {
                alert("Superhero not found. Please try another name.");
                return;
            }

            const superhero = data.results[0]; // Access the first result
            const powerstats = `
                <h1>${superhero.name}</h1>
                <p>Power: ${superhero.powerstats.power}</p>
                <p>Speed: ${superhero.powerstats.speed}</p>
                <p>Strength: ${superhero.powerstats.strength}</p>
            `;

            imageDiv.innerHTML = `<img src="${superhero.image.url}"a alt="${superhero.name}"/>${powerstats}`;
            imageDiv.style.opacity = "1"; // Show the image and details
        })
        .catch(error => {
            console.error("Error fetching superhero data:", error);
            alert("Failed to load superhero data. Please try again later.");
        });
}



function randomNumber(){
 return Math.floor(Math.random()*731+1);
}

function showRandomHero(superHeroId){
const imageDiv=document.getElementById("image");
imageDiv.style.opacity="1";
fetch(`https://superheroapi.com/api.php/8dc9510d2747c10c0b306f9c02a6605d/${superHeroId}`)
.then(response=>response.json())
.then(json=>{
const superHeroId=json.id;
const Name="<h1>"+`${json.name.toUpperCase()}`+"</h1>";
const powerstats=()=>{
const powerstats=
"<p>"+"Power:"+`${json.powerstats.power}`+"</p>"+"<p>"+"Speed:"+`${json.powerstats.speed}`+"</p>";


return powerstats;
}
console.log(powerstats());
imageDiv.innerHTML=`<img src="${json.image.url}"/>${Name}${powerstats()}`
})
};
