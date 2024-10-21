const myPromise=()=>{

    const promise:Promise<string>=new Promise((resolve,reject)=>{
console.log('started my assignment')
setTimeout(()=>{
    resolve('☺ finished the assignment')
},5000)
    })
     promise.then((text)=>{
        console.log(text)
     }).catch((error)=>{
        console.log(error)
     })

}
export default myPromise;