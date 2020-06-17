nums =[1,2,3,2,4];


function firstrecurring(nums){

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;i<nums.length;j++){

            if(nums[i] === nums[j]){
                return nums[i];
            }
        }
    }

    return undefined;
}

console.log(firstrecurring(nums))