const express = require("express");
const booksRouter = express.Router();
function router(nav){
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
    booksRouter.get('/',function(req,res){
        res.render("add",
        {
            nav,
            title:'Library',
            books
         });
    });
    booksRouter.get('/addbook',function(req,res){
        const id = req.params.id
        res.render("addbook",{
            nav,
            title:'Add Books'
        })
    })
    booksRouter.get('/addauthor',function(req,res){
        const id = req.params.id
        res.render("addauthor",{
            nav,
            title:'Add Books'
        })
    })


    return booksRouter;
}

module.exports = router;