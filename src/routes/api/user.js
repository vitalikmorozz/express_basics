const express = require('express');
const router = express.Router();

const userService = require('../../userService');

router.get('/all', (req, res) => {
    res.json(userService.getAll());
});

router.get('/:id', (req, res) => {
    res.json(userService.getById(req.params.id));
});

router.post('/', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const user = userService.create(name, age);
    res.status(201).json(user);
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const age = req.body.age;
    const user = userService.editById(id, name, age);
    res.status(200).json(user);
});

router.delete('/:id', (req, res) => {
    userService.deleteById(req.params.id);
    res.sendStatus(200);
});

module.exports = router;
