


const promise =new Promise((resolve,reject)=>{
      

   setTimeout( ()=>{resolve("Promise resolved!")},2000);
})


///using promise.then()
function getData(){
     
  console.log(promise)
    promise.then(res=>{
        console.log(res);
    })
}



//using async await

async  function handle() {

    console.log("Promise resolve Using async await ")
    const p=await promise ;



    console.log(p);
}

getData();

handle();