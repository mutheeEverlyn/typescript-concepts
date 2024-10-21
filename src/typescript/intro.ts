//tupples: have a fixed data type and length
let car:[number,string,string]=[2022,"toyota","harrier"];
//or

let mycar=[2023,"toyota","benz"]
const[year,make,model]=mycar;

//readonly tupples
let fruits: readonly [string,string]=['mango','pawpaw']
// fruits.push---error due to the readonly property

//arrays
let snacks:string[]=[
    'chocolate','icecream'
]
//or
let isFemale:boolean[];
isFemale=[true,false]

//readonly arrays
let evenNumbers:readonly number[]=[2,4,6,8]

//objects
let person:{
    name:string,
    age:number,
    location:string[],
    employed?:boolean //optional
}
person={
    name:'evah',
    age:22,
    location:['kenya','Nyeri']
}

//special types 
//1.any :rearly used
//2.never :mostly used in errors
//3.void: used in code without a return type for example a code that only has console.log