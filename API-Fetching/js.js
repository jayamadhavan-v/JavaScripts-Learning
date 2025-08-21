// learning about the fetching the data from the url 


// step 1 
// fetch the data by url 

// fetch("https://pokeapi.co/api/v2/pokemon/butterfree")
// .then(response => {

//     if(!response.ok){
//         throw new Error ("we cant fetch it");
//     }
//     return response.json()
// })
// .then(data => console.log(data.name))
// .catch(error => console.error(error));


fetchData();

async function fetchData(){

    try{


        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        // console.log(pokemonName);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
            throw new Error ("cant fetch");
        }

        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        // console.log(data);
        // console.log(data.types[0]);
        // console.log(data);
    }
    catch(error){
        console.log(error);
    }
} 