import { Request, Response } from "express";
import MovieModel from "../model/movie.model";
import UserModel from "../model/user.model";

export const createMovie = async (req: Request, res: Response) => {
    const {name} = req.body;
    const {userId} = req.params;

    try {
        const movie = await MovieModel.create({ name, userId});
        
        await UserModel.findByIdAndUpdate(
            {_id: userId}, 
            {$push: {movies: movie._id}})

        res.status(201).json(movie);
        
    } catch (error) {
        res.status(500).json(error)

    }
}