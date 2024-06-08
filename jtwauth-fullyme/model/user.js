let {Schema , model} = require('mongoose')

let userSchema = new Schema({
    Name : {type : String},
    Email: {type: String , require : true},
    password: {type:String}
})

let user = model("user" , userSchema)

module.exports = user;