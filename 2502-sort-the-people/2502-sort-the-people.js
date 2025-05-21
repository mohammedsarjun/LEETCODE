/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    for(let i=0;i<names.length;i++){
        let max=i
        for(let j=i+1;j<names.length;j++){
            if(heights[j]>heights[max]){
                max=j
            }
        }
        let temp=heights[i]
        heights[i]=heights[max]
        heights[max]=temp

        let anoTemp=names[i]
        names[i]=names[max]
        names[max]=anoTemp
    }
   return names
};