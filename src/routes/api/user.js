const express = require('express');
const router = express.Router();

const userService = require('../../service/UserService');

router.get('/all', async (req, res) => {
    res.json(await userService.find());
});

router.get('/:id', async (req, res) => {
    res.json(await userService.findById(req.params.id));
});

router.post('/', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await userService.save({ username, password });
    res.status(201).json(user);
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const username = req.body.username;
    const password = req.body.password;
    const user = await userService.updateById(id, { username, password });
    res.status(200).json(user);
});

router.delete('/:id', async (req, res) => {
    await userService.deleteById(req.params.id);
    res.sendStatus(200);
});

module.exports = router;
