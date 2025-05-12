/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let result=[]
    let pushed=false
   nums.sort((a,b)=>a-b)

   let uNums=new Set(nums)
   uNums=[...uNums]
 class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

   
    set(key,value){
   
        if(!this.table[key]){
           this.table[key]=[]
        }

        this.table[key].push({key,value})
        
    }

    get(key){
       
        return this.table[key].length
    }
 }

 let frequencyTable=new HashTable(nums.length)
   for(let i=0;i<=nums.length;i++){
    frequencyTable.set(nums[i],nums[i])

    if(frequencyTable.get(nums[i])==2){
        result.unshift(nums[i])
    }

    if(uNums[i]!=i+1 && !pushed){
        result.push(i+1)
        pushed=true
    }

   
   }

   return result
}