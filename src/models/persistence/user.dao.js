import users from '../data/users.data';

export const insert = (details) => {
    // Correctly calculate the new ID by adding 1 to the current length of users
    const newUser = {...details, id: users.length + 1 };
    // Add the newUser object to the users array
    users.push(newUser);

    return true;
};
