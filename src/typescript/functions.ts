const myFunction=()=>{

    //optional parameters
  const car=(make:string,model:string,color?:string)=>{
    console.log(`this is a ${color?color:""}  ${make} ${model} car `)
  }
  car("toyota","subaru");

    //default parameters
const totalSalary=(salary:number,bonus:number=0):number=>{
return salary+bonus;
}
console.log(totalSalary(20000,500))

    //rest parameters
const result=(...numbers:number[]):number=>{
return numbers.reduce((sum,num)=>sum+num,0)
}
console.log(result(1,2,3,4,5))

    //void return type
    const sayHi=():void=>{
console.log('hello there')
    }
    sayHi();

}
export default myFunction;