/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    class HashTable{
        constructor(size){
            this.table=new Array(size)
            this.size=size
        }

        hash(key){
            let count=0

            for(let i=0;i<key.length;i++){
               count+= key.charCodeAt(i) % this.size
            }

            return count        
            
            
            }

            set(key,value){
                let hashKey=this.hash(key)
                console.log(hashKey)
                if(!this.table[hashKey]){
                    this.table[hashKey]=[]
                    this.table.push(value)
                    return null
                }else{
                    return value
                }
            }

    }

    let table=new HashTable(100)

    for(let i=0;i<s.length;i++){
      let res=  table.set(s[i],s[i])
      if(res){
        return  res
      }
    }
};