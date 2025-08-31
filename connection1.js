const mongoose = require('mongoose')

const getConnection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/storageBox').then(() => {
        console.lo'MongoDB connected');
    }).catch(err => {
        console.('MongoDB connection error:', err);
    });
}
module.exports = getConnection