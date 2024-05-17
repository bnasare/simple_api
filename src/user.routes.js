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

router.get('/all', (req, res) => {
    const users = userService.getAllUsers();

    if (users.length) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            users: users
        })
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'No users found'
    })
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = userService.getUser(id);

    if (user) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            user: user
        })
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'No user found'
    })
})

router.post('/', expressYupMiddleware({schemaValidator: addUserSchema}),
    userController.addUser
);

router.put('/update/:id', expressYupMiddleware({schemaValidator: updateUserSchema}),
    userController.updateUser
);

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    const deletedUserId = parseInt(id);

    const isDeletedSuccessfully = userService.removeUser(deletedUserId)

    let response;
    if (isDeletedSuccessfully === true) {
        response={
            status:STATUS.success,
            message:`User ${deletedUserId} has been deleted`
        }
    } else {
        response={
            status:STATUS.failure,
            message:`Error deleting User ${deletedUserId}`
        }
    }

    return res.status(isDeletedSuccessfully? StatusCodes.OK: StatusCodes.BAD_REQUEST).send(response);
})

export default router
