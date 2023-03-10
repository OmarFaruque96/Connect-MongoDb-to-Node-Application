const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    // connect to db
    connectToDb: (cb)=>{
        MongoClient.connect('mongodb://localhost:27017/eventbright')
        .then((client)=>{
            dbConnection = client.db()
            return cb()
        })
        .catch((err)=>{
            console.log(err)
            return cb(err)
        })
    },  
    // return the db
    getDb:() => dbConnection
}