import userDoa from '../models/persistence/user.dao';

const addUser = (details) => {
    userDoa.insert(details);
}

const getUser = (userID) => {
    return userDoa.get(userID);
}

const deleteUser = (userID) => {
    return userDoa.delete(userID);
}