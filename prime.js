function prime(num){
    if (num<=1){
        return "non prime";
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            return "non prime";
        }
    }
    return "prime";
}
console.log(prime(17));
console.log(prime(49));