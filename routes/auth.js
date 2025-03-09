const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// Automatikus átirányítás /auth → /auth/login
router.get('/', (req, res) => {
    res.redirect('/auth/login');
});

// Bejelentkezés oldal
router.get('/login', (req, res) => {
    const user = req.session.username ? req.session.username : null;
    let error=undefined;
    let success=undefined;
    res.render('auth/login',{error:error,success:success,username:user});
});

// Regisztráció oldal
router.get('/register', (req, res) => {
    let error=undefined;
    const user = req.session.username ? req.session.username : null;
    res.render('auth/register',{error:error,username:user});
});

// Bejelentkezés
router.post('/login', async (req, res) => {
    const username = req.session.username ? req.session.username : null;
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.render('auth/login', { error: "Hibás e-mail vagy jelszó!" ,username:username,success:undefined});

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.render('auth/login', { error: "Hibás e-mail vagy jelszó!" ,username:username,success:undefined});

    req.session.username = email.split('@')[0];
    req.session.userId = user._id; // Session mentés
    res.redirect('/'); // Sikeres bejelentkezés
});

// Regisztráció
router.post('/register', async (req, res) => {
    const username = req.session.username ? req.session.username : null;
    const { email, password } = req.body;
    let error=undefined;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.render('auth/register', { error: "Ez az e-mail már regisztrálva van!" ,username:username});

    const newUser = new User({ email, password });
    await newUser.save();

    res.render('auth/login', { success: "Regisztráció sikeres! Most bejelentkezhetsz!",error:error ,username:username});
});

// Kijelentkezés
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/');
        }

        res.clearCookie('connect.sid'); // Cookie törlése
        res.redirect('/'); // Visszairányítás a főoldalra
    });
});


module.exports = router;
