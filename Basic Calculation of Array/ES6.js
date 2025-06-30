function find(N) {
    let even = 0, odd = 0;

    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            even += i;  
        } else {
            odd += i;   
        }
    }
    
    
    let result = even > odd ? "even" : "odd";
    console.log(result);
}
find(4);
