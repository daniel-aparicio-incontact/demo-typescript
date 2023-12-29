let payment = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Payment received');
    }, 3000);
});
  
let shipping = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Order shipped');
    }, 1000);
});
  
let delivery = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Order Delivered');
    }, 2000);
});
  
try {
    let result = Promise.all([payment, shipping, delivery]);
    result.then(data => console.log(data));
} catch (error) {
    console.log(error);
}