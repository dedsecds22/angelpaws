const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Album oldal megjelenítése
router.get("/gallery", async (req, res) => {
    try {
        // Lekérjük az összes felhasználót, akik feltöltöttek képeket vagy véleményeket
        const users = await User.find({ $or: [{ images: { $exists: true, $ne: [] } }, { reviews: { $exists: true, $ne: [] } }] });

        const username = req.session.username ? req.session.username : null;
        // Az újabb feltöltések jelenjenek meg elől
        res.render("gallery", { users: users.reverse() ,username:username});
    } catch (err) {
        console.error(err);
        res.status(500).send("Hiba történt az album betöltése közben.");
    }
});
router.post("/gallery/comment/:userId", async (req, res) => {
    const { comment } = req.body;
    const userId = req.params.userId;

    if (!comment || comment.trim() === "") {
        return res.redirect("/gallery");
    }

    try {
        await User.findByIdAndUpdate(userId, {
            $push: { review_from_others: { text: comment, date: new Date() } }
        });

        res.redirect("/gallery");
    } catch (err) {
        console.error(err);
        res.status(500).send("Hiba történt a hozzászólás mentésekor.");
    }
});

module.exports = router;
