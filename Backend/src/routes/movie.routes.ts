import { Router } from "express";
import { createMovie } from "../controllers/movie.controller";

const MovieRouter = Router();

// MovieRouter.post("/:userid", createMovie).get("/:userid", createMovie);

MovieRouter.post("/:userid", createMovie)
MovieRouter.get("/:userid", createMovie)

export default MovieRouter