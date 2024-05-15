// Importing user data from a separate file
import users from '../data/users.data';

/**
 * Function to retrieve a single user by ID.
 * @param {number} userID - The ID of the user to retrieve.
 * @returns {Object|null} - Returns the user object if found, otherwise returns null.
 */
const get = (userID) => {
    const findAUser = (user) => {
        // Check if the current user's ID matches the requested userID
        if (user.id === userID) {
            // Return the matching user object
            return user;
        }
        // Return null if no match is found
        return null;
    }
    // Use Array.prototype.find() to locate the user within the users array
    return users.find(findAUser);
}

/**
 * Function to retrieve all users.
 * @returns {Array<Object>} - An array of all user objects.
 */
const getAll = () => {
    // Simply return the entire users array
    return users;
}

/**
 * Function to update a user's details.
 * @param {Object} newDetails - An object containing the updated details of the user.
 */
const update = (newDetails) => {
    // Iterate over the users array using Array.prototype.map()
    users.map((user, index) => {
        // If the current user's ID matches the ID in newDetails, update the user's details
        if (user.id === newDetails.id) {
            // Replace the user at the current index with the new details
            users[index] = newDetails;
        }
    });
};

/**
 * Function to insert a new user into the users array.
 * @param {Object} details - An object containing the details of the new user.
 * @returns {Object} - The newly inserted user object.
 */
const insert = (details) => {
    // Create a new user object with the given details and assign it a unique ID based on the length of the users array
    const newUser = {...details, id: users.length + 1};
    // Add the new user to the end of the users array
    users.push(newUser);

    // Return the newly inserted user object
    return newUser;
};

/**
 * Function to remove a user by ID.
 * @param {number} userID - The ID of the user to remove.
 * @returns {boolean} - Returns true if the user was successfully removed, otherwise returns false.
 */
const remove = (userID) => {
    const deleteUser = (user, index) => {
        // Check if the current user's ID matches the requested userID
        if (user.id === userID) {
            // Remove the user from the users array and return true
            users.splice(index, 1);
            return true;
        }
        // Return false if no match is found
        return false;
    }
    // Use Array.prototype.find() to locate the user within the users array
    return users.find(deleteUser);
};

// Exporting the functions so they can be imported and used elsewhere
export default {get, getAll, update, insert, remove}
