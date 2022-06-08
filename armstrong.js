let n , sum , x;

n = 153;
sum = 0;
let armstrong = n;

while(n>0){
    x = n % 10;
    sum = sum + (x * x * x);
    n = n - x;
    n = n/10;
}
console.log(sum)

if(sum == armstrong){
    alert("Given number is Armstong");
}
else{
    ("Given number is not Armstong");
}