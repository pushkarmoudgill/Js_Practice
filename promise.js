const cart =["iwatch","Iphone","mac"];
  createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
    
// })
.then(function (orderId){
   return  paymentInfo(orderId);
}).then(function (message,amount){
    console.log(message)
   return  showOrderSummary(message,amount)


})
.then(function(message,amount){
    console.log(message)
     return editWallet(amount)
})
.then(function (message){
    console.log(message)
})
.catch(function (err){
    console.log(err.message)
})


function createOrder(cart){
    const pr=new Promise(function (resolve , reject){

        if(!validateCart(cart)){
            const err= new Error("cart is not valid");
            reject(err);
        }

        //logic for createOrder

        const orderId="1234";

        if(orderId){
            resolve(orderId);
        }
    });


    ///validate function
    return pr; 
}

function validateCart(cart){
    return true;
}

function paymentInfo(orderId){
     return new Promise(function(resolve,reject){
        resolve({message:"Payment Sucessfully Done!", amount:2500})
     })
}


function showOrderSummary(message,amount){
    return new Promise(function(resolve,reject){
       resolve({message:`You have ordered item that cost ${amount}`, amount})
    })
}

function editWallet(amount){
    return new Promise(function(resolve,reject){
       resolve({message:`You wallet has been debited by ${amount}`})
    })
}