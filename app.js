const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const flash = require("connect-flash");
require("dotenv").config();

const app = express();

// Adatbázis kapcsolat (ha MongoDB-t használunk)
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB csatlakoztatva!"))
.catch(err => console.log("❌ MongoDB hiba:", err));

// Middleware-ek
app.set("view engine", "ejs");  // EJS sablonok használata
app.use(express.static(path.join(__dirname, "public"))); // Statikus fájlok (CSS, képek)
app.use(bodyParser.urlencoded({ extended: true })); // Űrlapadatok kezelése
app.use(methodOverride("_method")); // Pl. PUT és DELETE metódusokhoz
app.use(flash()); // Üzenetek tárolása

// Express session (felhasználói bejelentkezéshez)
app.use(session({
    secret: "secret-key",  // Ezt később érdemes erősebbre cserélni
    resave: false,
    saveUninitialized: false
}));

// Globális változók (flash üzenetekhez)
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
});

// Route-ok importálása
const indexRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const galleryRoutes = require("./routes/gallery");

app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("/",profileRoutes);
app.use("/", galleryRoutes);

// Szerver indítása
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`🚀 Szerver fut: http://localhost:${PORT}`);
});
