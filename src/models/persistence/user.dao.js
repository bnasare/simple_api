import users from '../data/users.data';

const get = (userID) => {
    const getAUser = users.find((user) => user.id === userID);
    return getAUser;
}

const getAll = () => {
    return users;
}

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

    const updatedUser = {...existingUser, ...newDetails};
    users.splice(userIndex, 1, updatedUser);

    return updatedUser;
};

const insert = (details) => {
    const newUser = { id: users.length + 1, ...details };
    users.push(newUser);
    return newUser;
};

const remove = (userID) => {
    const index = users.findIndex(user => user.id === userID);

    if (index !== -1) {
        users.splice(index, 1);
        return true;
    }
    return false;
};

export default {get, getAll, update, insert, remove};
