const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:123qwe@localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDb");
}).catch((e) => {
    console.log(`Error while connecting to MongoDb ${e}`);
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};
