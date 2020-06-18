const express = require('express'); // require은 node_module을 어딘가에서 가져오는 것, 지금은 express라는 파일을 찾고 있는 것 몿 장으면 node modules에서 express를 찾음, 결국 express를 import 한거임
const app = express(); // application을 만드는 것 ; app에 express를 싱행해서 담은 것

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
    res.send('Hi from home!');
}

function handleProfile(req, res) {
    res.send("You ar on my frofile");
}

app.get("/", handleHome); // 함수는 request object, response object을 요청함

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);  // 4000포트를 listen하기 시작할 때 handleListening 함수를 콜백해줘

