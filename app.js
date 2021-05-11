const express = require("express");
const bodyParser =require("body-parser");
let alert = require('alert');
const app = express();
const nav = [{link:'/books',name:'Books'},{link:"/authors",name:'Authors'},{link:"/add",name:"Add Items"},{link:"/login",name:"Login"},{link:"/signup",name:"Signup"}] ;
const booksRouter = require("./src/routes/bookRoutes")(nav)
const authorRouter = require("./src/routes/authorRoutes")(nav)
const loginRouter = require("./src/routes/loginRoutes")(nav)
const signupRouter = require("./src/routes/signupRoutes")(nav)
const addRouter = require("./src/routes/addRoutes")(nav)
var urlencodedParser = bodyParser.urlencoded({ extended: false }); 
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/add',addRouter);
app.post('/',urlencodedParser, function(req, res) {
    data={
        name:req.body.name,
        pass:req.body.pass
    };
    res.render("index",
    {
        nav,
       title:'Library'
    });
    alert("Welcome "+data.name+".Login successful");
  });
  
app.get('/',function(req,res){
    res.render("index",
    {
        nav,
       title:'Library'
    });
});
app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
