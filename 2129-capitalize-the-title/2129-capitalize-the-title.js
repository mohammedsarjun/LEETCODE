/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let newStr=[]

    title=title.split(' ')

    for(let i=0;i<title.length;i++){
        let tempStr=title[i].toLowerCase().split('')
        if(tempStr.length>2){
        let tempWord=tempStr.shift()
        tempStr.unshift(tempWord.toUpperCase())
        }
        newStr.push(tempStr.join(''))
    }

    return newStr.join(' ')
};