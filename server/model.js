import mongoose from "mongoose";
const schema=mongoose.Schema({
    task:{
        type:String
    },
    date:{
        type:String
    }
})
export default mongoose.model.Tasks  || mongoose.model('Task',schema)

