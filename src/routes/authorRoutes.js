const express = require("express");
const authorRouter = express.Router();
function router(nav){
    var books=[{
        title:'Joseph Barbera',
        author:'Tom and Jerry',
        genre:'Cartoon',
        img:'joseph.jpg'
    },
    {
        title:'J K Rowling',
        author:'Harry potter',
        genre:'Fantasy',
        img:'rowling.jpg'
    },
    {
        title:'Basheer',
        author:'Pathummede Aadu',
        genre:'Drama',
        img:'bash.jpg'
    }
    ]
    authorRouter.get('/',function(req,res){
        res.render("Authors",
        {
            nav,
            title:'Library',
            books
         });
    });
    authorRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("Author",{
            nav,
            title:'Library',
            book:books[id]
        })
    })

    return authorRouter;
}

module.exports = router;