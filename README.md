# 🐾 Angel Paws – Kisállat Emlékoldal

Ez a weboldal egy teljes funkcionalitású emlékhely kisállatok számára, ahol a felhasználók megoszthatják kedvenceik emlékét képekkel és véleményekkel.

## 🔧 Funkciók

Felhasználói fiók kezelése
✅ Regisztráció és bejelentkezés
A felhasználók regisztrálhatnak e-mail (nem feltétlenül valós e-mail) és jelszó megadásával.
A jelszó megadása kétszer történik a hibák elkerülése érdekében.
Bejelentkezés után a felhasználók hozzáférhetnek a profiljukhoz, és a közösségi rész tartalom gyarapítasahoz.
✅ Profilkép feltöltése
Minden felhasználó feltölthet egy profilképet, amely megjelenik a galériában és a vélemények mellett.
📸 Közösségi galéria és emlékek
✅ Képfeltöltés
A felhasználók több képet is feltölthetnek (max. 5 egyszerre) kisállataikról.
A feltöltött képek automatikusan megjelennek a galériában.
✅ Nyilvános galéria (Facebook orientált)
Teljesen nyilvános, nem szükséges regisztráció a megtekintéshez.
Az összes regisztrált felhasználó feltöltött képei megtekinthetők a galériában.
A képek egy Bootstrap alapú képnézegetőben (carousel) jelennek meg, ami azt jelenti hogy van egy jobbra és egy balra nyíl amivel navigálni lehet a képek között.
Az albumra a felhasználó profilkepere kattintva megjelenik egy ablak ami kinagyitja
✅ Vélemények és hozzászólások
A felhasználók írhatnak saját emlékeket és mások is hagyhatnak véleményeket, megjegyzéseket az emlékoldalukon.(Más képeihez regisztráció nélkül is lehet véleményt írni)
A vélemények dátum szerint rendezve jelennek meg.
✅ Mobilbarát kialakítás (különösen az albumban)
A weboldal reszponzív, vagyis mobil és asztali nézetben egyaránt jól működik
📂 Technológiai háttér
✅ Node.js + Express backend
✅ MongoDB adatbázis a felhasználói adatokhoz és képekhez
✅ Multer fájlkezelés a kép- és profilkép-feltöltéshez
✅ EJS templating rendszer a dinamikus tartalom megjelenítéséhez


## 🚀 Telepítés helyben (local setup)

```bash
git clone https://github.com/dedsecds22/angelpaws.git
cd angelpaws
npm install
```
Majd indítsd el a szervert:
```bash
node app.js
```
💾 Adatbázis
A projekt MongoDB-t használ. Állítsd be a kapcsolódást az app.js fájlban (lokális vagy MongoDB Atlas).
Érdemes HTTPS beállítani certbot/Let's Encrypt-el


📬 Kapcsolat
Ha kérdésed van, írj bátran: nglpws@gmail.com