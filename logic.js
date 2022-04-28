// const req=require("express/lib/request")
// const res=require("express/lib/response")

// const{redirect,append}=require("express/lib/response")
var data=require("../controller/data.json")
const fs=require("fs")

const get_data=(req,res)=>{
    res.json(data)
    res.send({message:"get successfully"})
}

const postdata=(req,res)=>{
    // console,log(req,res)

    const user={
    id:data.length+1,
        name:req.body.name,
        logo:req.body.logo,
        notes:req.body.notes,
        days_to_complete:req.body.days_to_complete,
        short_description:req.body.short_description,
        type:req.body.type,
        course_type:req.body.course_type,

    }
    data.push(user)
    res.send(user)
    a=fs.writeFileSync("data.js",JSON.stringify(data,null,4))
}

const putdata=(req,res)=>{
    // console,log(req,res)
    let id = req.body.id
    let name= req.body.name
    let logo = req.body.log
    let notes = req.body.notes
    let days_to_complete = req.body.days_to_complete
    let short_description = req.body.short_description
    let type = req.body.type
    let course_type = req.body.course_type
    let lang_available = req.body.lang_available

    let index=meraki_data.findIndex((data)=>{
        return (data.id==Number.parseInt(id))
})
    if (index>=0){
        let data1=data[index]
        data1.name=name
        data1.notes=notes
        data1.days_to_complete=days_to_complete
        data1. short_description=short_description
        data1.type= type
        data1.course_type=course_type
        data1.logo=logo
        data1. lang_available=lang_available

        res.json(data1)
        res.send({message:"success"})

    }
    else{
        res.send({message:"do not "})
    }
}
// })

const delete_data=(req,res)=>{
    let id=req.params.id;
    let index =data.findIndex((data)=>{
        return (data.id==Number.parseInt(id))
    })
    if(index>=0){
        let data1=data[index]
        data.splice(index,1)
        res.json(data1)
    }
    else{
        res.send({message:" try again "})
    }
}

module.exports={get_data,postdata,putdata, delete_data}
