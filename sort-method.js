const fruits = ["dragon fruit", "apple" ,"date", "cherry", "banana"];

console.log(fruits.sort());

const nums = [10, 5, 18,1,27];

const compareFunction = (a,b)=> {

    //1.  <0 => a comes first
    //2. 0 => nothing changes
    //3. >0 b comes first
    return a-b;
    //return b-a;
};

console.log(nums.sort(compareFunction));