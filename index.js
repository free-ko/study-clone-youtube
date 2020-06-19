import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
    console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send('Hi from home!');

const handleProfile = (req, res) =>  res.send("You ar on my dream");

const betweenHome = (req, res, next) => {
    console.log("I'm between");
    next();
};

app.get("/",betweenHome, handleHome); // 함수는 request object, response object을 요청함

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);  // 4000포트를 listen하기 시작할 때 handleListening 함수를 콜백해줘

