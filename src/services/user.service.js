import userDao from '../models/persistence/user.dao';

/**
 * Retrieves a user by their unique ID.
 *
 * @param {number} userID - The unique identifier of the user to be retrieved.
 * @returns {object|undefined} - The user object if found, otherwise undefined.
 */
const getUser = (userID) => {
    return userDao.get(userID);
}

/**
 * Retrieves all users.
 *
 * @returns {Array} - An array of all user objects.
 */
const getAllUsers = () => {
    return userDao.getAll();
}

/**
 * Updates the details of an existing user.
 *
 * @param {number} userID - The unique identifier of the user to be updated.
 * @param {object} details - An object containing the updated details of the user.
 * @returns {object|boolean} - The updated user object if the user was found and updated, or false if the user was not found.
 */
const updateUser = (userID, details) => {
    return userDao.update(userID, details);
}

/**
 * Adds a new user with the provided details.
 *
 * @param {object} details - An object containing the details of the new user.
 * @returns {object} - The newly created user object.
 */
const addUser = (details) => {
    return userDao.insert(details);
}

/**
 * Removes a user by their unique ID.
 *
 * @param {number} userID - The unique identifier of the user to be removed.
 * @returns {boolean} - True if the user was found and removed, or false if the user was not found.
 */
const removeUser = (userID) => {
    return userDao.remove(userID);
}

export default { getUser, getAllUsers, updateUser, addUser, removeUser }
