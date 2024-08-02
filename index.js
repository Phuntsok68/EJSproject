import express from "express";
const app=express();
const port=3000;

app.get("/",(req,res)=>{

    const today = new Date();
    let day = today.getDay();
    // console.log(day);

    let d='Weekday';
    let adv='Lets get back to work.';
    
    if(day===0 || day===6){
        d='Weekend';
        adv='Lets have some fun.';
    }

   res.render("index.ejs",{
        dayType:d,
        advice:adv
    });
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})