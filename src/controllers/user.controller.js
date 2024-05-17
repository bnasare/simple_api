import { StatusCodes } from 'http-status-codes';

import userService from '../services/user.service.js';

const STATUS = {
    success: 'YES',
    failure: 'NO',
}

const addUser =  (req, res) => {
    const {body:user} = req;

    const addedUser = userService.addUser(user);

    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        user: addedUser
    });
}

const updateUser = (req, res) => {
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
        user: updatedUser
    })
}

export default {updateUser, addUser}