// script.js
const jokeText = document.getElementById("jokeText");
const fetchJokeBtn = document.getElementById("fetchJokeBtn");

function fetchJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?safe-mode").then((response) => response.json()).then((data) => {
      if (data.error) {
        jokeText.textContent = "Failed to fetch joke. Please try again later.";
      } else {
        if (data.type === "twopart") {
          jokeText.textContent = `${data.setup} ${data.delivery}`;
        } else {
          jokeText.textContent = data.joke;
        }
      }
    })
    .catch((error) => {
      jokeText.textContent =
        "An error occurred while fetching the joke. Please try again later.";
      console.error("Error fetching joke:", error);
    });
}

fetchJokeBtn.addEventListener("click", fetchJoke);

// Initial fetch
fetchJoke();
