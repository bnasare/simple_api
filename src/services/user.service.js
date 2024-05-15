import userDao from '../models/persistence/user.dao';

const getUser = (userID) => {
    return userDao.get(userID);
}

const getAllUsers = () => {
    return userDao.getAll();
}

const updateUser = (userID, details) => {
    return userDao.update(userID, details);
}

const addUser = (details) => {
    userDao.insert(details);
}

const removeUser = (userID) => {
    return userDao.delete(userID);
}

export default {getUser, getAllUsers, updateUser, addUser, removeUser}