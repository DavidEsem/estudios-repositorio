const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");


const UserSchema = new Schema({
  name: { type: String },
  password: { type: String },
  email: { type: String },                 

});
 
//incriptar password >>>>>

 /* UserSchema.pre("save", function(next){
  bcrypt.genSalt(10).then(salts =>{
    bcrypt.hash(this. password, salts).then(hash => {
    this.password = hash;
      next();
    }).catch(error => next(error));
  }).catch(error => next(error));

}); 
 */
module.exports = User = mongoose.model('User', UserSchema);