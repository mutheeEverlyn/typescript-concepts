//omit: helps us to create a new type by ommitting some properties from an existing types
const myOmit=()=>{

type employedPerson={
name:string,
age:number,
job:string
}

let ignatius:employedPerson={
    name:'Kamau',
    age:30,
    job:"BodyGuard"
}

type student=Omit<employedPerson,'job'>

let evah:student={
    name:"mso",
    age:22
}
console.log(evah)
}


export default myOmit;