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

const deleteUser = (req, res) => {
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
}

const getUser = (req, res) => {
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
}

const getAllUsers = (req, res) => {
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
}

export default {updateUser, addUser, deleteUser, getUser, getAllUsers}