fetch("https://icanhazdadjoke.com/slack")
.then(data =>data.json())
.then(jokeData => {
    const jokeText = jokeData.attachments[0].text;
    const joke_ele = document.getElementById('joke_ele');

    joke_ele.innerHTML = jokeText;

})
// converting to json

