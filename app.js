import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json()); // 마찬가지로 json도 이해하기 위해서 유저가 보낸 데이터를
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // 유저가 보낸 form에서 받은 데이터를 이해하기위해
app.use(helmet());
app.use(morgan("dev")); //나의 첫 middleware임

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;