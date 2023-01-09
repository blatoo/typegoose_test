import mongoose from "mongoose"

export const run = async (fn: Function) => {
    const conn = await mongoose.connect("mongodb://localhost:27017/", { dbName: "mypets" })
  
    await fn()


    await conn.disconnect()
  }