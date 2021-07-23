


const promise = new Promise(function (resolve, reject){
    const x = Math.floor(Math.random() * 10); //[0, 10)

    console.log("Value of x is", x);

    if(x>=5){
        resolve("x is greater than 5");
    } else{
        reject("x is lesser than 5");
    }

});

const x = 10;

const res = promise.then(function (res){
    console.log("Inside then call",res);
}).catch(function (err) {
    console.log("Inside catch call", err)
});
console.log(res);
console.log(" x is ", x);
