import express from 'express';
import { StatusCodes } from 'http-status-codes';

import userService from './services/user.service.js';

const router = express.Router();

const STATUS = {
    success: 'OK',
    failure: 'NO',
}

router.use(express.json());

router.get('/', (req, res) => {
    res.status(StatusCodes.OK).send('Hello World!');
})


router.post('/add', (req, res) => {
    const data = [];
    const {body:users} = req;

    userService.addUser(details);
    if (!users.name) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: STATUS.failure,
            message: 'Name is required'
        });
    }

    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        message:data
    });
})

export default router
