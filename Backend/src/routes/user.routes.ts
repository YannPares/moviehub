import {Router} from "express";
import {createUser, deleteUserByID, getAllUsers, getUserById, updateUserName} from "../controllers/user.controllers";

const UserRouter = Router()

UserRouter
    .post("/", createUser)

    .get("/", getAllUsers)

    .get("/:userId", getUserById)

    .put("/:userId", updateUserName)

    .delete("/:userId", deleteUserByID)

    .all("*", (req, res) => {
        res.status(405).json({message: "Method not allowed"})
    });


export default UserRouter