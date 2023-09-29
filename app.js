// const app=require("express")()
//     //alternative 
        const express=require("express")
const { posts } = require("./model/index")
        const app=express()


//database connection
require("./model/index")
    
app.set('view engine','ejs')

//from bata data parse gareko for display parse
app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.get("/",async(req,res)=>{
    const allPosts=await posts.findAll()  //posts vanne table bata sab find garney
    // console.log(allPosts) //yo chai array vitra object vara aauxa
    res.render("allPost",{posts:allPosts})//we pass it here so we can display it in our  / page mabecoz ejs file
})
app.get("/newPost",(req,res)=>{

   
    res.render("newPost")

})

//for submit action api hit post
app.post("/newPost",async(req,res)=>{

    // console.log(req.body)
    const {title,subtitle,description}=req.body //data of form store greko

    // aba databse ma hamro data HTMLAnchorElement
    await posts.create({
        title:title,
        subtitle:subtitle,
        description:description
    })
    res.redirect("/")


})

app.get("/singlePost/:id",async(req,res)=>{
    // console.log(req.params.id)
    const id=req.params.id
    const post=await posts.findAll({
        where:{
            id:id
        }
    })
    // console.log(post)


    res.render("singlePost",{post:post})

})

app.get("/delete/:id",async(req,res)=>{

    console.log(req.params.id)
    const id=req.params.id
    const deletePost=await posts.destroy({
        where:{
            id:id
        }
        
    })
    console.log("deletion succcessfull")
        res.redirect("/")




})

app.listen(3000,(req,res)=>{
    console.log("Node has started at port 3000 ")
})