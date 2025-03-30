/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    if(s.length < 3) return 0;
    let result = 0;
    let testStr = s.substr(0,3).split('');
    for(let i = 3 ; i<= s.length; i++){
        if(
            testStr[0] !== testStr[1] && 
            testStr[1] !== testStr[2] && 
            testStr[0] !== testStr[2]
        ){
            // console.log(testStr)
            result++;
        }
        testStr.shift();
        testStr.push(s[i]);
    }

    return result;
    

    
};