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
    return  userDao.insert(details);
}

const removeUser = (userID) => {
    return userDao.remove(userID);
}

export default {getUser, getAllUsers, updateUser, addUser, removeUser}