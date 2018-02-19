function factiorial(n){
    // find the end point

    if(n <= 1) return 1

    // Call this function recursively
    return 8 * factiorial(n-1)

    
}
// console.log(factiorial(4))



function fibonacci(n){
    if(n<=2) return 1
    // console.log((n-1) + (n-2));

    return fibonacci(n -1) + fibonacci(n - 2);
}
// console.log(fibonacci(3))


function sumIt(n){
    if (n <= 1) return 1

    return n + sumIt(n-1)
}
// console.log(sumIt(4))



function sumMulti(n) {
    // If it's less than 3 return 0
    if(n < 3) return 0
  
    // if is not a  multiple of 3 subtract by as much as it needs to become a multiple of 3
    // if(n < 6 && n >= 3) return 3
  
    // if(n % 3 !== 0) {
    //   n = n - (n % 3)
// n = (n % 3 !== 0) ? (n - (n%3)) : n
    
  
    return (n < 3) ? 0 : (n % 3 !== 0) ? sumMulti(n - (n%3)) : n + sumMulti(n-3)
}
  
// console.log(sumMulti(8))


let countDown = (num) => {
    console.log(num)
    countDown(num *1)
}

countDown(10)