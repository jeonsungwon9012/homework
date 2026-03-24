function repeat(n,f){
    for(var i=0;i<n;i++){
        if(i%3==0&i!=0){
            f(i)
        }

    }
   
}

repeat(10, function(i) {
  console.log(i);
});