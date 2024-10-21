//typecasting: process of overriding types,it converts a variable from one datatype to another
const typeCasting=()=>{
    let port:string='3000'

    //1.as keyword
    let myPort:number=port as unknown as number
   console.log(myPort)
   console.log(typeof myPort)

    //2.<>
    let MyPort=<unknown|number> port
   console.log(MyPort)
    //3.typecasting using parseint function in javascript
}
export default typeCasting;