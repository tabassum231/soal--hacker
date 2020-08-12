const express= require ('express');
const mongoose= require ('mongoose');

const hnews= require('./controller/hnews')

mongoose.connect('mongodb://localhost:27017/hacker-milestone', {
    useNewUrlParser: true
})

.then(() =>{
    const app = express();

    //middleware
    app.use(express.json());

    app.get('/news', hnews.findhNews);              //to read all news
    app.post('/news', hnews.createNews);            //to create a news
    app.get("/news/:id", hnews.findNews);           //to read one news
    app.patch("/news/:id", hnews.updateNews);       //to update a news
    app.delete("/news/:id", hnews.deleteNews);      //to delete a news
    


app.listen(8000, ()=>{

    console.log('server has started');
});


})
.catch(()=>{
    console.log('database connection failed')
})
