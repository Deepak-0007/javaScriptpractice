function countchar(str,char){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==char){
            count++
        }
    }
    return count;
}
console.log(countchar("museum","m"));// case1
console.log(countchar("marbracadabra","a"));// case2
console.log(countchar("90045","2"));// case4
