// console.log("start exe...")
// console.log("load exe...")
// console.log("complete exe...")

// let a=10
// let b=0;
// console.log("start exe...")
// setTimeout(()=>{
//     console.log("load exe...")
//     b=20
// },2000)
// console.log("complete exe...")
// console.log(a+b); // handled using promise or async/await

// let waitingData = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         b=20
//         // b="can be string"
//         // b=['and array', 24, 17]
//         resolve(b)
//     },2000)
// })

// data=b from resolve
// waitingData.then((data)=>{
//     // b=data;
//     console.log(a+data)
// })






// Call-Stack--->Node-API, Callback-Queue
// .txt 
console.log("start")

setTimeout(()=>{
    console.log("load 2sec exe...")
    b=20
},2000)

setTimeout(()=>{
    console.log("load 0sec exe...")
    b=20
},0)

console.log("end")



