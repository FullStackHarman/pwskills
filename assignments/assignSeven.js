async function fetchMultipleResources ([]){
         const result = await new Promise((resolve, reject) => {
            resolve(setTimeout(()=>{ return console.log("I am resolved")},1000))
        })
        const result2 = await new Promise((resolve, reject) => {
            resolve(setTimeout(()=>{ return console.log("I am number 2")},1000))
        })

        const result3 =await new Promise((resolve, reject) => {
            resolve(setTimeout(()=>{ return console.log("I am number 3")},1000))
        })

}