import mongoose from 'mongoose'

const conn = async (db_url)=>{
    try {
        const db_option ={
            dbName : 'login'
        }
        await mongoose.connect(db_url,db_option)
        console.log('connect successfully')
    } catch (error) {
        console.log(error)
    }
}

export default conn