let a=[23, 22, 10, 1, 46, 2, 9, 5, 3, 6];
let b=[89, 65, 8, 4, 45, 46, 25, 23, 47];
let c=a.concat(b);

 c.sort((a,b)=>{
    return a-b;
 })
 console.log(c);