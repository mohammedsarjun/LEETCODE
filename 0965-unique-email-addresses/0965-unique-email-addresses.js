/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let resultEmail=[]
    for (let i=0;i<emails.length;i++){
        
        let localName=emails[i].split('').splice(0,emails[i].indexOf('@'))
      
        for(let j=0;j<localName.length;j++){
            if(localName[j]=='.'){
                localName.splice(j,1)
                 j--
            }
           
        }
         console.log(localName)
        for(let j=0;j<localName.length;j++){
           if(localName[j]=='+'){
                localName.splice(j,localName.length)
                break;
            }
        }
  
        resultEmail.push(`${localName}${emails[i].split('').splice(emails[i].indexOf('@'),emails[i].length)}`)
       
         resultEmail[i]= resultEmail[i].replace(/,/g,"")
        
    }
    // for(let i=0;i<resultEmail.length;i++){
      
    // }
    console.log(resultEmail)
    let mySet=new Set(resultEmail)
    let result=[...mySet]
   return result.length
};