function repeat(n,f){
    for(var i=0;i<n;i++){
            f(i)
    }
   
}
var sum=0
repeat(5, function(i) {
    sum+=i
});
console.log(sum);