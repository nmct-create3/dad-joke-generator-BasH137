let newJokeBtn, jokeElement;

const init = function () {
  console.log("script loaded");
  newJokeBtn = document.querySelector("#new-btn-joke");
  jokeElement = document.querySelector("#joke");

  newJokeBtn.addEventListener("click", getJoke);
};

const getJoke = async function () {
  console.log("getJoke()");
  fetch("https://icanhazdadjoke.com/slack")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const jokeText = data.attachments[0].text;
      const jokeFallback = data.attachments[0].fallback;

      if (jokeText !== "" && jokeText !== undefined) {
        jokeElement.innerHTML = jokeText;
      } else {
        jokeElement.innerHTML = jokeFallback;
      }
    });
};

init();
