const passport = require('passport');
const express = require('express');
const router = express.Router();
const globals = require('../globals');
const redirect = {
    successRedirect : '/',
    failureRedirect : '/'
};

router.get('/', globals.isLoggedIn, function(req, res){
    res.send('You are authenticated');
});

router.get('/login', passport.authenticate('google', {scope : ['profile', 'email']}));

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

router.get('/google/callback', passport.authenticate('google', redirect));

module.exports = router;