const router = require('express').Router();

const userService = require('../../userService');

router.get('/list', (req, res) => {
    res.render('user/list', { list: userService.getAll() });
});

router.get('/edit/:id', (req, res) => {
    const user = userService.getById(req.params.id);
    if (!user) {
        res.redirect('/web/user/list');
        return;
    }
    res.render('user/edit', { user });
});

router.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const age = req.body.age;
    userService.editById(id, name, age);
    res.redirect('/web/user/list');
});

router.get('/delete/:id', (req, res) => {
    userService.deleteById(req.params.id);
    res.redirect('/web/user/list');
});

module.exports = router;
