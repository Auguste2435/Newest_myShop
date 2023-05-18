// const mongoose = require("mongoose")
import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({


   name: { type: String, required: true },
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   isAdmin: { type: Boolean, required: true, default: false },
},
   {
      timestaps: true,
   }

)


// export default mongoose.models.Users || mongoose.model("Users", UserSchema);
// export default User
const User = mongoose.models.Users || mongoose.model("Users", UserSchema);
export default User

