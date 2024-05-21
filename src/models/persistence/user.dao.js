import users from '../data/users.data';

/**
 * Retrieves a user by their unique ID.
 *
 * @param {number} userID - The unique identifier of the user to be retrieved.
 * @returns {object|undefined} - The user object if found, otherwise undefined.
 */
const get = (userID) => {
    const getAUser = users.find((user) => user.id === userID);
    return getAUser;
}

/**
 * Retrieves all users.
 *
 * @returns {Array} - An array of all user objects.
 */
const getAll = () => {
    return users;
}

/**
 * Updates the details of an existing user.
 *
 * @param {number} userID - The unique identifier of the user to be updated.
 * @param {object} newDetails - An object containing the updated details of the user.
 * @returns {object|boolean} - The updated user object if the user was found and updated, or false if the user was not found.
 */
const update = (userID, newDetails) => {
    let existingUser = null;
    let userIndex;

    users.map((user, index) => {
        if (user.id === userID) {
            existingUser = user;
            userIndex = index;
        }
    });

    if (!existingUser) {
        return false;
    }

    const updatedUser = { ...existingUser, ...newDetails };
    users.splice(userIndex, 1, updatedUser);

    return updatedUser;
};

/**
 * Inserts a new user with the provided details.
 *
 * @param {object} details - An object containing the details of the new user.
 * @returns {object} - The newly created user object.
 */
const insert = (details) => {
    const newUser = { id: users.length + 1, ...details };
    users.push(newUser);
    return newUser;
};

/**
 * Removes a user by their unique ID.
 *
 * @param {number} userID - The unique identifier of the user to be removed.
 * @returns {boolean} - True if the user was found and removed, or false if the user was not found.
 */
const remove = (userID) => {
    const index = users.findIndex(user => user.id === userID);

    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
};

export default { get, getAll, update, insert, remove };
