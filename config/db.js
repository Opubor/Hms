const mongoose = require ('mongoose')

async function connectDB(){
    try {
        return await mongoose.connect('mongodb://127.0.0.1:27017/hospital')
    } catch{
        console.log('Database Connecction Error')
    }
}

module.exports = connectDB