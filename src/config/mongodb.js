const mongoose = require("mongoose");

async function connectMongoDB() {
    try{
        await mongoose.connect("mongodb://localhost:27017/WC2026");

        console.log("ket noi thanh cong MongoDB");
    } catch(err) {
        console.error("ket noi that bai :)) ", err);
        process.exit(1);
    }
}

module.exports = connectMongoDB;