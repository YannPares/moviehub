import { Router} from 'express';

import { deleteUser, getAllUsers, getAllUsersRegistered, createUser, updateUser } from '../controllers/user.controllers';

import { check } from '../middleware/check.middleware';
const userRoutes = Router();

userRoutes.get('/' , getAllUsers)

userRoutes.get('/Registered' , getAllUsersRegistered)

userRoutes.delete('/:userId' , deleteUser)

userRoutes.post('/' ,check,  createUser)

userRoutes.patch('/:userId', updateUser)


export default  userRoutes