const downloadData = new Promise((resolve, reject) => {
         return setTimeout(resolve("dummyData"),5000)
    
})
downloadData.then((v)=>{console.log(v)})


