const num=[2,4,3,10,11,12];
const numsno3=[];
for(i=0;i<num.length;i++){
    if(num[i]%3!=0){
        numsno3.push(num[i]);
    }
}
console.log(numsno3);