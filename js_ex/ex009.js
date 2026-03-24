function repeat(n,f){
    for(var i=0;i<n;i++){
            f(i)
    }
   
}
var arr=[]
repeat(5, function(i) {
    arr.push(i)
});
console.log(arr);