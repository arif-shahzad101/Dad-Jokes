// Array of dad jokes
const dadJokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
];

// Function to generate a random joke
function generateRandomJoke() {
    const randomIndex = Math.floor(Math.random() * dadJokes.length);
    return dadJokes[randomIndex];
}

// Event listener for the "Tell me a Joke" button
const btn = document.getElementById("btn");
const jokeElement = document.getElementById("joke");

btn.addEventListener("click", () => {
    const randomJoke = generateRandomJoke();
    jokeElement.textContent = randomJoke;
});
