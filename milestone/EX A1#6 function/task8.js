function parameter(str){
    let count =0;
    let count1=0;
    let len=str.length;
    for(i=0; i<=len; i++){
    if(str[i]=='('){
        count++;
    }
    else if(str[i]==')'){
        count1++;
    }
    }
    if(count==count1){
        return true;
    }else{
        return false;
    }
}
console.log(parameter("(a+b+(c+d*e)-(d+e*f))+3")); // case 1
console.log(parameter("4+5)+6")); //case2