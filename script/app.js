let newJokeBtn, jokeElement;

const init = () => {
  console.log("Script loaded");
  newJokeBtn = document.querySelector("#new-btn-joke");
  jokeElement = document.querySelector("#joke");

  newJokeBtn.addEventListener("click", getJoke);
};

const getJoke = async () => {
  console.log("getJoke()");
  try {
    const response = await fetch("https://icanhazdadjoke.com/slack");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);

    const jokeText = data.attachments[0].text || data.attachments[0].fallback;
    jokeElement.innerHTML = jokeText;
  } catch (error) {
    console.error("An error occurred:", error);
    jokeElement.innerHTML = "Failed to fetch a joke. Please try again later.";
  }
};

init();
