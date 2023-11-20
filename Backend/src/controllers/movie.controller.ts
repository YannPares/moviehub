import {Request, Response} from 'express';
import prisma from "../db/client";
import UserModel from "../model/user.model";


export const createMovie = async (req: Request, res: Response) => {
    const {title, year, genres} = req.body
    const {userID} = req.params
    console.log(genres)
    try {

        const newMovie = await prisma.movies.create({
            data: {
                title,
                year,
                // genres: { 
                    // connect: genres.map((genre: string) => ({id: genre}))
                // },
                User: {
                    connect: {
                        id: userID
                    }
                },
            }
        })


        res.status(201).send(newMovie)

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}