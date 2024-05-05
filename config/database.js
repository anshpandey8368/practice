const mongoose = require('mongoose');

require('dotenv').config();

const dbConnects = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DataBase is connected successfully"))
    .catch((error) => {
        console.log("Issue in DataBase");
        console.error(error.message);
        process.exit(1);
    });
};

module.exports = dbConnects;