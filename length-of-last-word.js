/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let counter = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        
        if (s[i] !== " ") {
            counter++;
        }
        
        else if (counter > 0) {
            break;
        }
    }
    
    return counter;
};