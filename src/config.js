const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/software_project");


connect.then(() => {
    console.log("Database connected Successfully");
})

.catch(()=>{
    console.log("Database cannot be connected");
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create Model
const User = mongoose.model("User", userSchema);

// Export Model
module.exports = User;


