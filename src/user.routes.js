import express from 'express';
import { expressYupMiddleware } from 'express-yup-middleware';

import {addUser, updateUser, getUser, deleteUser} from './user.schemas.js';
import userController from './controllers/user.controller.js';

const router = express.Router();

router.use(express.json());

router.get('/all', userController.getAllUsers);

router.get('/:id', expressYupMiddleware({schemaValidator: getUser}),
    userController.getUser
);

router.post('/add', expressYupMiddleware({schemaValidator: addUser}),
    userController.addUser
);

router.put('/update/:id', expressYupMiddleware({schemaValidator: updateUser}),
    userController.updateUser
);

router.delete('/:id', expressYupMiddleware({schemaValidator: deleteUser}),
    userController.deleteUser
);

export default router
