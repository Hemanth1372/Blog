import express from "express";
import morgan from "morgan";
import {dirname} from "path";
import {fileURLToPath} from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(morgan("tiny"));

app.set("view engine", "ejs");

const posts = [];

function createNewPost(title, description) {
    posts.push({title, description});
}

function updatePost(title, description, id) {
    console.log(posts);
    posts[id].title = title;
    posts[id].description = description;
}

app.get("/", (req, res) => {
    res.render("index", {
        year: new Date().getFullYear(),
        totalposts: posts.length
    });
});

app.use((req, res, next) => {
    res.locals.year = new Date().getFullYear();
    next();
});

app.get("/features/create", (req, res) => {
    res.render("features/create", {});
})

app.post("/submit", (req, res) => {
    createNewPost(req.body.title, req.body.description);
    res.redirect("/features/create");
})

app.post("/edit-submit", (req, res) => {
    const id = posts.findIndex(post => post.title === req.body.title);
    updatePost(req.body.title, req.body.description, id);
    res.redirect("/features/create");
})

app.get("/features/update", (req, res) => {
    res.render("features/update", { posts })
});

app.get("/features/blogs", (req, res) => {  
    res.render("features/blogs", { posts });
});

app.get("/features/edit", (req, res) => {
    const id = req.query.id;
    const post = posts[id];
    res.render("features/edit", { title : post.title, description : post.description });
});

app.get("/features/delete", (req, res) =>  {
    const id = req.query.id;
    posts.splice(id, 1);
    res.render("features/update", { posts });
});

app.listen(port, ()=>{
    console.log(`Server listening on the port : ${port}`);
});
