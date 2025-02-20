import express from "express"
import { getSimilarTv, getTrendingTv, getTvBycategory, getTvDetails, getTvTrailer } from "../controller/tv.controller.js";


const router=express.Router();

router.get("/trending" , getTrendingTv)
router.get("/:id/trailers",getTvTrailer)
router.get("/:id/details",getTvDetails)
router.get("/:id/similar",getSimilarTv)
router.get("/:category",getTvBycategory)

export default router;