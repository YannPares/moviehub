import { NextFunction, Request, Response } from "express";

export const check = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    if (name.length < 4) {
        res
            .status(400)
            .json({ message: 'Name must be at least 4 characers long' });
    }
    next();
}