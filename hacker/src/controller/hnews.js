const News=require("../models/News");


//find all news
exports.findhNews= async (req, res)=>{
    const hnews=await News.find();
    res.send({ data: hnews });
};

// create a news
exports.createNews= async(req, res) =>{
    const news= new News(req.body);
    await news.save();
    res.send({data : news});
};


//fetch a single news by id 
//handle the error

exports.findNews= async (req, res)=>{
    try{
        const news= await News.findById(req.params.id)
        res.send({data: news})
    }
    catch{
        res.status(404).send({error: "News is not found!"})
    }
    
};


//update news
//handle the error

exports.updateNews= async(req, res)=>{
    try{
        const news= await News.findById(req.params.id);
        Object.assign(news, req.body);
        news.save();
        res.send({data: news});
    }
    catch{
        res.status(404).send({error: "News is not found!"})
    }
    
};


//delete news
//handle the error
exports.deleteNews=async(req, res) =>{
    try{
        const news= await News.findById(req.params.id)
        await news.remove();
        res.send({data: true})
    }
    catch{
        res.status(404).send({error: "News is not found!"})
    }
    
}
