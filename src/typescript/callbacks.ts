const callBacks=()=>{

    const greet=(name:string,callBackFn:()=>void)=>{
        console.log(`hello ${name}`)
     callBackFn()
    }
    const sayHi=()=>{
        console.log('how are you')
    }
    greet('evah',sayHi)
}
export default callBacks;