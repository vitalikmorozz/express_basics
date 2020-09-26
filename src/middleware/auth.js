module.exports = (req, res, next) => {
    const token = req.header('authorization');
    if (!token) {
        res.sendStatus(403).end();
        return;
    }
    next();
};
