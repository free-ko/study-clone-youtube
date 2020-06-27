//import는 알파벳 순으로 하는게 좋은 습관임.
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middelwares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json()); // 마찬가지로 json도 이해하기 위해서 유저가 보낸 데이터를
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // 유저가 보낸(요청) form에서 받은 데이터를 이해하기위해
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
