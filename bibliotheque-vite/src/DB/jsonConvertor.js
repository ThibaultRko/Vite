import fetch from 'node-fetch';
import fs from 'fs/promises'; // Utilisez la bibliothèque 'fs/promises' pour gérer les fichiers de manière asynchrone

// URL de l'API Pokémon pour obtenir la liste de tous les Pokémon
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; // Le paramètre "limit" détermine le nombre maximum de Pokémon à récupérer

// Fonction pour récupérer la liste de tous les Pokémon
async function getAllPokemonData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('La requête vers l\'API a échoué.');
        }

        const data = await response.json();
        const pokemonList = [];

        // Parcourez la liste des résultats et récupérez les données de chaque Pokémon
        for (const pokemon of data.results) {
            const pokemonData = await getPokemonData(pokemon.url);
            pokemonList.push(pokemonData);
        }

        return pokemonList;
    } catch (error) {
        console.error('Erreur lors de la récupération de la liste des Pokémon :', error);
    }
}

// Fonction pour récupérer les données d'un Pokémon individuel en utilisant son URL
async function getPokemonData(pokemonUrl) {
    try {
        const response = await fetch(pokemonUrl);
        if (!response.ok) {
            throw new Error('La requête vers l\'API a échoué.');
        }

        const data = await response.json();

        // Récupérez l'URL de l'image du Pokémon
        const imageUrl = data.sprites.front_default;

        // Téléchargez l'image et enregistrez-la localement
        const imageFileName = `pokemon_${data.id}.png`; // Nom du fichier d'image
        await downloadImage(imageUrl, imageFileName);

        // Créer un objet JavaScript avec les données du Pokémon, y compris le chemin de l'image
        const pokemon = {
            nom: data.name,
            id: data.id,
            types: data.types.map(type => type.type.name),
            poids: data.weight,
            taille: data.height,
            image: imageFileName, // Chemin de l'image
        };

        return pokemon;
    } catch (error) {
        console.error('Erreur lors de la récupération des données du Pokémon :', error);
    }
}

// Fonction pour télécharger une image depuis une URL et l'enregistrer localement
async function downloadImage(imageUrl, fileName) {
    try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error('La requête pour l\'image a échoué.');
        }

        const imageBuffer = await response.buffer();
        await fs.writeFile(fileName, imageBuffer);
    } catch (error) {
        console.error('Erreur lors du téléchargement de l\'image :', error);
    }
}

// Appel de la fonction pour obtenir la liste de tous les Pokémon
getAllPokemonData()
    .then(pokemonList => {
        if (pokemonList) {
            console.log('Liste de tous les Pokémon :', pokemonList);
        }
    })
    .catch(error => {
        console.error('Une erreur est survenue :', error);
    });

