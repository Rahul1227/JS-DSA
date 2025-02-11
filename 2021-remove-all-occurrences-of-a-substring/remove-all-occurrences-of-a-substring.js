/**
 * @param {string} str
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(str, part) {
    let s = str.split(''); // Convert string to array
    let partLength = part.length;

    while (true) {
        let joinedStr = s.join(''); // Convert array back to string to check for `part`
        let index = joinedStr.indexOf(part); // Find the index of `part` in the string

        if (index === -1) {
            break; // Exit the loop if `part` is not found
        }

        s.splice(index, partLength); // Remove `part` from the array
    }

    return s.join(''); // Convert the array back to a string and return
};