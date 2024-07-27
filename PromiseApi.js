const p1= new Promise((resolve ,reject)=>{

    setTimeout(()=> resolve("P1 sucess"),3000)
})

const p2= new Promise((resolve ,reject)=>{

    setTimeout(()=> resolve("P2 sucess"),1000)
})

const p3= new Promise((resolve ,reject)=>{

    setTimeout(()=> resolve("P3 sucess"),5000)
})

Promise.all([p1,p2,p3]).then(res=>{

    console.log(res);
});