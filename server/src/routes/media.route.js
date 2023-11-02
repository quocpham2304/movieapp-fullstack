import express from "express";
import mediaController from "../controlers/media.controller.js";

const router = express.Router({mergeParams: true});

router.get("/search", mediaController.search);

router.get("/genres", mediaController.getGenres);

router.get("/detail/:mediaId", mediaController.getDetail);

router.get("/:mediaCategory", mediaController.gerList);

export default router;