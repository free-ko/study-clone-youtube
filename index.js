import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hi from home!");

const handleProfile = (req, res) => res.send("You ar on my dream");

app.use(cookieParser());
app.use(bodyParser.json()); // 마찬가지로 json도 이해하기 위해서 유저가 보낸 데이터를
app.use(bodyParser.urlencoded({ extended: true })); // 유저가 보낸 form에서 받은 데이터를 이해하기위해
app.use(helmet());
app.use(morgan("dev")); //나의 첫 middleware임

app.get("/", middleware, handleHome); // 함수는 request object, response object을 요청함

app.get("/profile", handleProfile);

app.listen(PORT, handleListening); // 4000포트를 listen하기 시작할 때 handleListening 함수를 콜백해줘
