const User = require('../model/User');

async function save(user) {
    const newUser = new User(user);
    try {
        const result = await newUser.save();
        return result;
    } catch (err) {
        throw err;
    }
}

async function findOne(filter) {
    try {
        const result = await User.findOne(filter);
        return result;
    } catch (err) {
        throw err;
    }
}

async function find(filter) {
    try {
        const result = await User.find(filter);
        return result;
    } catch (err) {
        throw err;
    }
}

async function findById(id) {
    try {
        const result = await User.findById(id);
        return result;
    } catch (err) {
        throw err;
    }
}

async function findByUsername(username) {
    try {
        const result = await User.findOne({ username });
        return result;
    } catch (err) {
        throw err;
    }
}

async function updateById(id, user) {
    try {
        const result = await User.findByIdAndUpdate(id, user);
        return result;
    } catch (err) {
        throw err;
    }
}

async function deleteById(id) {
    try {
        const result = await User.findByIdAndDelete(id);
        return result;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    save,
    findOne,
    find,
    findByUsername,
    findById,
    updateById,
    deleteById,
};
