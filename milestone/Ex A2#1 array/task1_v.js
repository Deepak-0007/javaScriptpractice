//count string wiht b and B
function hasB(str){
    for(i=0;i<str.length;i++){
        if(str[i]=='b'||str[i]=='B'){
            return true;
        }

    }
    return false;
}
const string=['HI','ball','CAB','BYE','Good'];
let len=string.length;
let count=0;
for(let i=0;i<len;i++){
    if (hasB(string[i])){
        count++;
    }
}
console.log('number of string with b and B',count);