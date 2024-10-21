const interfaceTypes=()=>{

    interface car{
        make:string,
        model:string,
        year:number,
        color?:string
    }

    let myCar:car={
        make:'toyota',
        model:'filder',
        year:2022
    }
    console.log(myCar)

    //interface extension
    interface person{
        name:string,
        age:number,
        location:string
    }

    interface student extends person{
        id:string,
        course:string,
        university:string
    }

    let evah:student={
        name:'evah mso',
        age:22,
        location:'Karatina',
        id:'pa106',
        course:'BSE',
        university:'kyu'
    }
   console.log(evah)
    //calculating area of rectangle and volume of cuboid
    interface rectangleType{
    width:number,
    height:number
    }

    //area
    let areaRectangle=(rectangle:rectangleType):number=>{
   return rectangle.height* rectangle.width;
    }
    console.log(areaRectangle({height:2,width:3}))

  //volume
  interface cuboidType extends rectangleType{
depth:number
  }

  let volumeCuboid=(cuboid:cuboidType):number=>{
return cuboid.depth*cuboid.height*cuboid.width;
  }
  console.log(volumeCuboid({depth:9,height:7,width:4}))
}
export default interfaceTypes;