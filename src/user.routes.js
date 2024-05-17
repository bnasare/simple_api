import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { expressYupMiddleware } from 'express-yup-middleware';

import userService from './services/user.service.js';
import {addUserSchema, updateUserSchema} from './user.schemas.js';
import userController from './controllers/user.controller.js';

const router = express.Router();

const STATUS = {
    success: 'YES',
    failure: 'NO',
}

router.use(express.json());

router.get('/all', userController.getAllUsers);

router.get('/:id', userController.getUser);

router.post('/add', expressYupMiddleware({schemaValidator: addUserSchema}),
    userController.addUser
);

router.put('/update/:id', expressYupMiddleware({schemaValidator: updateUserSchema}),
    userController.updateUser
);

router.delete('/:id', userController.deleteUser);

export default router
