const arr = [2, 3, 4, 5];
arr.forEach((element, index) => {
    console.log(index, element * element);
});
const num=[20,30,45,60,95];
const maxmark=num.filter((num)=> {
    if(num>90){
        return num;
      
    }
    
});
console.log(maxmark);




