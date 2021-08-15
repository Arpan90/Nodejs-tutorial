const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Middleware being used');
    next();
});

router.get('/', (req, res) => {
    res.send('/ being hit'); // '/people' route in app.js refers to this route.
});

router.get('/example', (req, res) => {
    res.send('/example being hit');
});

module.exports = router;