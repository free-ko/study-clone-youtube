import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1,
  }; // 존재하지 않는 가짜 정보임 user에 객체로 정보를 가짜로 넣음
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
