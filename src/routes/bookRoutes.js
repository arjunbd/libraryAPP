const express = require("express");
const bodyParser =require("body-parser");
const booksRouter = express.Router();
var obj=[];
var encodedParser=bodyParser.urlencoded({ extended: true }); 
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
            books,
            obj
         });
    });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("book",{
            nav,
            title:'Library',
            book:books[id],
            
        })
    })
    booksRouter.post('/',encodedParser, function(req, res) {
        data={
            name:req.body.bookname,
            author:req.body.bookauthor,
            genre:req.body.bookgenre,
            img:'unavailable.jpg'
        }
        obj.push(data);
        res.render("books",
        {
            nav,
           title:'Library',
           books,
           obj
        });
      });
    return booksRouter;
}

module.exports = router;