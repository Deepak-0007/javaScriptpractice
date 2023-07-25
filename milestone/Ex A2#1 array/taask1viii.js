const strings=['hi','Hello','X','Y'];
for(let i=0;i<strings.length;i++){
    if(strings[i]=='Hello'){
        strings.splice(i,1);
        break;
    }
}
console.log(strings)