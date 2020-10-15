const router = require('express').Router();

const userService = require('../../service/UserService');

router.get('/list', async (req, res) => {
    res.render('user/list', { list: await userService.find() });
});

router.get('/edit/:id', async (req, res) => {
    const user = await userService.findById(req.params.id);
    if (!user) {
        res.redirect('/web/user/list');
        return;
    }
    res.render('user/edit', { user });
});

router.post('/create', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    await userService.save({
        username,
        password,
        createdAt: Date.now().toString(),
    });
    res.redirect('/web/user/list');
});

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const username = req.body.username;
    const password = req.body.password;
    await userService.updateById(id, { username, password });
    res.redirect('/web/user/list');
});

router.get('/delete/:id', async (req, res) => {
    await userService.deleteById(req.params.id);
    res.redirect('/web/user/list');
});

module.exports = router;
