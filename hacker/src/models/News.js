const mongoose= require ('mongoose');


const schema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Required']
    },

    description:{
        type:String,
        required:[true,'Required']
    },
    url:{
        type:String,
        required:[true,'Required']
    },
    username:{
        type:String,
        required:[true,'Required']},
    dateOfCreation:{
        type:Date,
        required:[true,'Required'],
        default:Date.now()
    },

})

module.exports=mongoose.model("News", schema);

