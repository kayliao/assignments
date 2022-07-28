function twoSum(nums,target)
{
    for(let i = 0; i < nums.length; i++)
    {
        let firstnum = nums[i];
        let needednum = target - firstnum;

        if(nums.includes(needednum))
        {
            let index = nums.indexOf(needednum);
            if(index!==i)
            {
                return result = [i,index];
            }
        }
        
    }
    
}

console.log(twoSum([2,7,11,15],9));