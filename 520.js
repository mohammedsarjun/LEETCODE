
var detectCapitalUse = function(word) {
    let pattern1=/^[A-Z]{1,}$/
    let pattern2=/^[a-z]{1,}$/
    let pattern3=/^[A-Z][a-z]*$/
    if(pattern1.test(word)){
      return true
    }
    else if(pattern2.test(word)){
      return true
    }
     else if(pattern3.test(word)){
      return true
     }
     else{
      return false
     }
};

console.log(detectCapitalUse("FlaG"))