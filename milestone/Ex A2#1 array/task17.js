function getevenarray(array){
    let len =array.length;
    let newarray=[];
    for(let i=0; i<len;i++){
        if(array[i]%2==0){
            newarray.push(array[i]);
        }
    }
    return newarray;
}
let case1=[5,18,26,30,40,6,9]
console.log(getevenarray(case1));

let case2=[6]
console.log(getevenarray(case2))

let case3=[77]
console.log(getevenarray(case3))

let case4=[20,14,2,7,18]
console.log(getevenarray(case4))