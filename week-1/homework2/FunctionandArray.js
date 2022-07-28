function max(numbers)
{
    let maxnum = numbers[0];
    for(let i = 0; i < numbers.length; i++)
    {
        if(numbers[i]>maxnum)
        {
            maxnum = numbers[i];
        }
    
    }    
    return maxnum;
}

console.log(max([1,2,4,5]));
console.log(max([5,2,7,1,6]));
