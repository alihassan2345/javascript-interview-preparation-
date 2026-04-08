let mypromise = new Promise((resolve,reject)=>{

    let success = true

    if(success == true){
        resolve("success")
    }else{
        reject("error")
    }
})

mypromise.then((data)=>{
console.log(data)
}).catch((err)=>{
    console.log(err)
})