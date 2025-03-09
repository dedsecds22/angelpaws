const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const User = require('../models/User');

// Multer beállítások
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads'); // Fájlok mentése
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Egyedi fájlnév
    }
});

const upload = multer({ storage: storage });

// Profil oldal megjelenítése
router.get('/profile', async (req, res) => {
    if (!req.session.username) {
        return res.redirect('/auth/login'); // Ha nincs bejelentkezve, irányítsuk a login oldalra
    }

    try {
        const user = await User.findById(req.session.userId);
        res.render('profile', { 
            username: req.session.username, 
            profilePicture: user.profilePicture
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Hiba történt.");
    }
});

// Profilkép feltöltése
router.post('/profile/uploadProfilePicture', upload.single('profilePicture'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send("Nem töltöttél fel képet!");
    }

    try {
        await User.findByIdAndUpdate(req.session.userId, { profilePicture: req.file.filename });
        res.redirect('/profile');
    } catch (err) {
        console.error(err);
        res.status(500).send("Hiba történt a profilkép mentésekor.");
    }
});

// Vélemény küldése
router.post('/profile/review', async (req, res) => {
    const { review } = req.body;

    try {
        await User.findByIdAndUpdate(req.session.userId, {
            $push: { reviews: review }
        });

        res.redirect('/profile');
    } catch (err) {
        console.error(err);
        res.status(500).send("Hiba történt.");
    }
});

// Képfeltöltés
router.post('/profile/images', upload.array('images', 5), async (req, res) => {
    const imageFiles = req.files.map(file => file.filename);

    try {
        await User.findByIdAndUpdate(req.session.userId, {
            $push: { images: { $each: imageFiles } }
        });

        res.redirect('/profile');
    } catch (err) {
        console.error(err);
        res.status(500).send("Hiba történt.");
    }
});

module.exports = router;
