const mongoose = require('mongoose')

const getConnection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/storageBox').then(() => {
        console.log('MongoDB connected');
    }).catch(err => {
        console.error('MongoDB connection error:', err);
    });
}
module.exports = getConnection