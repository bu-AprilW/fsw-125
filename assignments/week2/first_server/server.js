const express = require("express");
const app = express();

const PORT = 8000;


let movies = [
    {title: "The Notebook", genre: "Romance"},
    {title: "The Hangover", genre: "Comedy"},
    {title: "Bachelorette Party", genre: "Comedy"},
];

app.get("/movies", (req, res) => {
    res.send(movies)
});

let tv = [
    {title: "Vikings", genre: "Action"},
    {title: "Rick and Morty", genre: "Cartoon"},
    {title: "Game of Thrones", genre: "Drama"},
];

app.get("/tv", (req, res) => {
    res.send(tv)
});

let youtubeVideos = [
    {title: "The Watchman", genre: "Bible"},
    {title: "Stephen Gardner", genre: "News"},
    {title: "Bitzon", genre: "Cryptocurrency"},
];

app.get("/youtubeVideos", (req, res) => {
    res.send(youtubeVideos)
});

app.listen(PORT, () => {
    console.log("The server is running on Port 8000")
});