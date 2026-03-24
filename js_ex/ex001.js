function repeat(n,f){
    for(var i=0;i<n;i++){
        f(i)
    }
   
}

repeat(5, function(i) {
  console.log(i);
});