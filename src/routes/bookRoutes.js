const express = require("express");
const bodyParser =require("body-parser");
const booksRouter = express.Router();
booksRouter.use(bodyParser.urlencoded({ extended: true })); 
var books=[{
    title:'Tom and Jerry',
    author:'Joseph Barbera',
    genre:'Cartoon',
    img:'tom.jpg'
},
{
    title:'Harry Potter',
    author:'J K Rowling',
    genre:'Fantasy',
    img:'harry.jpg'
},
{
    title:'Paathummede Aaadu',
    author:'Basheer',
    genre:'Drama',
    img:'basheer.jpg'
}
]
function router(nav){

    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
         });
    });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("book",{
            nav,
            title:'Library',
            book:books[id]
        })
    })
    booksRouter.post('/', function(req, res) {
        res.render("books",
        {
            nav,
           title:'Library',
           books
        });
      });
    return booksRouter;
}

module.exports = router;