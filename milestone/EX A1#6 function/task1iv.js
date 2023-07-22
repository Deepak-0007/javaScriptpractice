// function factorial(n){
//     let out=1;
//     for(let i=1; i<=n;i++){
//         out=out*i;
//     }
//     return out;
// }
// let n=5;
//console.log('factorial of',n,'is',factorial(n))


//task 1 v
function factorial(n){
    let out=1;
    for(let i=1; i<=n;i++){
        out=out*i;
    }
    return out;
}
function printfactorial(n){
    for(let i=1; i<=n; i++){
        let fact=factorial(i);
        console.log('factorial of',i,'is',fact);
    }
}
printfactorial(5);