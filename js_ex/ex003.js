function repeat(n,f){
    for(var i=0;i<n;i++){
        if(i%2!=0){
            f(i)
        }

    }
   
}

repeat(5, function(i) {
  console.log(i);
});