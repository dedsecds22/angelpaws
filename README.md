# 🐾 Angel Paws – Kisállat Emlékoldal

Ez a weboldal egy teljes funkcionalitású emlékhely kisállatok számára, ahol a felhasználók megoszthatják kedvenceik emlékét képekkel és véleményekkel.

## 🔧 Funkciók

- Felhasználói regisztráció és bejelentkezés
- Profilkép és több kép feltöltése
- Véleményírás saját profilra
- Mások véleményezése (hozzászólás funkció)
- Bootstrap-alapú modern reszponzív dizájn
- Képgaléria carousel megjelenítéssel
- MongoDB adatbáziskezelés
- Express.js és EJS motor

## 📁 Fájlstruktúra

project-root/ │ ├── models/ # MongoDB modellek (User.js) ├── public/ # Statikus fájlok (CSS, képek, feltöltések) │ └── uploads/ # Feltöltött képek (automatikusan generálódik) ├── routes/ # Express útvonalak (auth.js, profile.js, gallery.js) ├── views/ # EJS sablonok (oldalak) ├── .gitignore ├── README.md ├── app.js # Fő backend fájl ├── package.json


## 🚀 Telepítés helyben (local setup)

```bash
git clone https://github.com/dedsecds22/angelpaws.git
cd angelpaws
npm install
Majd indítsd el a szervert:

node app.js
💾 Adatbázis
A projekt MongoDB-t használ. Állítsd be a kapcsolódást az app.js fájlban (lokális vagy MongoDB Atlas).

📸 Képernyőképek
//

📬 Kapcsolat
Ha kérdésed van, írj bátran: nglpws@gmail.com