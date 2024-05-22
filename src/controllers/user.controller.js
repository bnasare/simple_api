import { StatusCodes } from 'http-status-codes';
import pino from 'pino';

import userService from '../services/user.service.js';

const logger = pino();

const STATUS = {
    success: 'YES',
    failure: 'NO',
}

/**
 * Adds a new user.
 *
 * @param {object} req - The request object containing the user details in the body.
 * @param {object} res - The response object used to send the response.
 * @returns {object} - The response containing the status and the newly added user.
 */
const addUser = (req, res) => {
    const { body: user } = req;

    const addedUser = userService.addUser(user);
    logger.info(addedUser);

    return res.status(StatusCodes.CREATED).send({
        status: STATUS.success,
        user: addedUser
    });
}

/**
 * Updates an existing user.
 *
 * @param {object} req - The request object containing the user details in the body and the user ID in the params.
 * @param {object} res - The response object used to send the response.
 * @returns {object} - The response containing the status and the updated user, or a not found message if the user does not exist.
 */
const updateUser = (req, res) => {
    const { body: user } = req;

    const id = parseInt(req.params.id);

    const updatedUser = userService.updateUser(id, user);

    if (!updatedUser) {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `User with ID ${id} not found`
        });
    }
    return res.status(StatusCodes.OK).send({
        status: STATUS.success,
        user: updatedUser
    });
}

/**
 * Deletes a user by their ID.
 *
 * @param {object} req - The request object containing the user ID in the params.
 * @param {object} res - The response object used to send the response.
 * @returns {object} - The response containing the status and a message indicating if the user was deleted successfully or not.
 */
const deleteUser = (req, res) => {
    const { id } = req.params;

    const deletedUserId = parseInt(id);

    const isDeletedSuccessfully = userService.removeUser(deletedUserId);

    let response;
    if (isDeletedSuccessfully === true) {
        response = {
            status: STATUS.success,
            message: `User ${deletedUserId} has been deleted`
        };
    } else {
        response = {
            status: STATUS.failure,
            message: `Error deleting User ${deletedUserId}`
        };
    }

    return res.status(isDeletedSuccessfully ? StatusCodes.OK : StatusCodes.BAD_REQUEST).send(response);
}

/**
 * Retrieves a user by their ID.
 *
 * @param {object} req - The request object containing the user ID in the params.
 * @param {object} res - The response object used to send the response.
 * @returns {object} - The response containing the status and the user object if found, or a not found message if the user does not exist.
 */
const getUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = userService.getUser(id);

    if (user) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            user: user
        });
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'No user found'
    });
}

/**
 * Retrieves all users.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object used to send the response.
 * @returns {object} - The response containing the status and an array of all user objects, or a not found message if no users exist.
 */
const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();

    if (users.length) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.success,
            users: users
        });
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.failure,
        message: 'No users found'
    });
}

export default { updateUser, addUser, deleteUser, getUser, getAllUsers };
