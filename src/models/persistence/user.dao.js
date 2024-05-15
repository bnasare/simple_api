// Importing user data from a separate file
import users from '../data/users.data';

/**
 * Function to retrieve a single user by ID.
 * @param {number} userID - The ID of the user to retrieve.
 * @returns {Object|null} - Returns the user object if found, otherwise returns null.
 */
const get = (userID) => {
    const getAUser = users.find((user) => {
        // Check if the current user's ID matches the requested userID
        if (user.id === userID) {
            // Return the matching user object
            return user;
        }
        // Return null if no match is found
        return null;
    })

    // Use Array.prototype.find() to locate the user within the users array
    return getAUser;
}

/**
 * Function to retrieve all users.
 * @returns {Array<Object>} - An array of all user objects.
 */
const getAll = () => {
    // Simply return the entire users array
    return users;
}

// const updateee = (newDetails) => {
//     // Iterate over the users array using Array.prototype.map()
//     users.map((user, index) => {
//         // If the current user's ID matches the ID in newDetails, update the user's details
//         if (user.id === newDetails.id) {
//             // Replace the user at the current index with the new details
//             users[index] = newDetails;
//         }
//     });
// };

/**
 * Function to update a user's details.
 * @param {Object} newDetails - An object containing the updated details of the user.
 */
// Define the update function that takes newDetails as an argument
const update = (userID, newDetails) => {
    // Initialize variables to hold the existing user and their index
    let existingUser = null;
    let userIndex;

    // Use.map() to iterate over the users array
    users.map((user, index) => {
        // Check if the current user's ID matches the ID in newDetails
        if (user.id === userID) {
            // If a match is found, store the user object and its index
            existingUser = user;
            userIndex = index;
        }
    });

    // Check if an existing user was found
    if (!existingUser) {
        // If not, return false indicating no user was found or updated
        return false;
    }

    // Create a new user object by merging the existing user's details with the new details
    // The spread operator (...) is used to copy properties from both objects
    const updateduser = {...existingUser,...newDetails};

    // Use.splice() to replace the existing user in the users array with the updated user
    // The first argument specifies the start index, the second argument specifies how many items to remove,
    // and the third argument specifies the item(s) to insert
    users.splice(userIndex, 1, updateduser);

    // Return the updated user object
    return updateduser;
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
