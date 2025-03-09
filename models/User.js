const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    reviews: { type: [String], default: [] }, // Saját vélemények
    images: { type: [String], default: [] }, // Feltöltött képek
    review_from_others: { type: [{ text: String, date: Date }], default: [] }, // Mások hozzászólásai
    profilePicture: { type: String, default: 'default.jpg' }
});

// Jelszó hashelés mentés előtt
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', UserSchema);
