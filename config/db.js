const mongoose = require ('mongoose')

async function connectDB(){
    try {
        // Add your database URL here EXAMPLE
        // return await mongoose.connect('mongodb://localhost:27017/hospital')
        return await mongoose.connect('mongodb+srv://opubor:Anthonyjemi@cluster0.wuabtba.mongodb.net/?retryWrites=true&w=majority')
    } catch{
        console.log('Database Connection Error')
    }
}

module.exports = connectDB