const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect(err =>{
    if (err) {
        console.log(err);
        process.exit(-1);
    }

    console.log('Succesfully connected to Mongo DB');
});

module.exports = client;