const typeAliases=()=>{
//arrays
//2.array type declaration
type evenType=number[];

//2.array type declaration
type oddType=Array<number>

let even:evenType=[2,4,6,8]
console.log(even)

//objects
type vehicle={
    make:string,
    model:string,
    year:number,
    color?:string
}
let mazda:vehicle={
    make:'mazda',
    model:'fielder',
    year:2011,
    color:"blue"
}
console.log(mazda)

//union type: used when you are working with multiple types
type age=number|string
let myAge:age='twenty two'
let Age:age=22
console.log(myAge)
console.log(Age)

//intersection type: used to combine multiple types into 1
type A={
a:number;
}
type B={
    b:number;
} 
type C={
    c:number;
}

type ABC=A & B & C;
let num:ABC={
    a:2,
    b:4,
    c:8
}
console.log(num)
}

export default typeAliases;