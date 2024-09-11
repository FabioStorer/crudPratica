const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://fabiostorer19:<NianMongowo42490>@cluster0.s8t9u.mongodb.net/';

async function main () {
    await mongoose.connect(mongoDB);
};

main().then(() => console.log('Successfully connected.')).catch((error => console.log(error)));

module.exports = mongoose;