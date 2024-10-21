let myPick=()=>{
interface Person{
    name:string,
    age:number,
    location:string,
    university:string,
    status:string
}

type student=Pick< Person,"name"|"university" >

let student1:student={
    name:"evah",
    university:"kyu"
}

console.log(student1)
}

export default myPick;