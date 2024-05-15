import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userService from './services/user.service.js';

const router = express.Router();

const STATUS = {
    success: 'OK',
    failure: 'NO',
}

router.use(express.json());

router.get('/ping', (req, res) => {
    res.status(StatusCodes.OK).send('OK!');
})

router.get('/users', (req, res) => {
    const users = userService.getAllUsers();
})

router.post('/add', (req, res) => {
    const {body:user} = req;

    const addedUser = userService.addUser(user);

    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        message: addedUser
    });
})

router.put('/update/:id', (req, res) => {
    const {body:user} = req;

    const id = parseInt(req.params.id);

    const updatedUser = userService.updateUser(id, user);

    if (!updatedUser) {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User with ID ${id} not found`
        })
    }
    return res.status(StatusCodes.OK).send({
        status: STATUS.success,
        message: updatedUser
    })
})

export default router
