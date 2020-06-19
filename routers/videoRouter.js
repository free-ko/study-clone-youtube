import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send("Videos"));
videoRouter.get(routes.upload, (req, res) => res.send("Videos Upload"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("Videos Detail"));
videoRouter.get(routes.editVideo, (req, res) => res.send("Videos Edit"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("Videos Delete"));


export default videoRouter; //전체를 export 한다는 의미