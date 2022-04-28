var fs=require('fs');
const axios=require('axios')
var link="https://api.merakilearn.org/courses"
axios.get(link)
.then((response)=>{
    var DATA=response.data
    var myJSON=JSON.stringify(DATA,null,4);
    fs.writeFileSync("data.json",myJSON)

})
.catch((error)=>{
    console.log(error)
})

// const data=require("./data.json")



