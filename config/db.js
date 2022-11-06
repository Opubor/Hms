const mongoose = require ('mongoose')

async function connectDB(){
    try {
        return await mongoose.connect('mongodb+srv://opubor:Opubortony2000@cluster0.wuabtba.mongodb.net/?retryWrites=true&w=majority')
        // return await mongoose.connect('mongodb+srv://opubor:<password>@cluster0.wuabtba.mongodb.net/?retryWrites=true&w=majority')
    } catch{
        console.log('Database Connecction Error')
    }
}

module.exports = connectDB