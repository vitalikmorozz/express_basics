let users = [];

const getAll = () => {
    return [...users];
};

const getById = (id) => {
    return users.find((user) => user.id == id);
};

const create = (name, age) => {
    const user = {
        id: Date.now(),
        name,
        age,
    };
    users = [...users, user];
    return user;
};

const editById = (id, name, age) => {
    users = users.map((user) => {
        if (user.id == id) user = { ...user, name, age };
        return user;
    });
    return getById(id);
};

const deleteById = (id) => {
    users = users.filter((user) => user.id != id);
};

module.exports = {
    getAll,
    getById,
    create,
    editById,
    deleteById,
};
