/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    let result = new Array(n).fill(0);

    for(let i=0; i< bookings.length; i++){
        for(let j=bookings[i][0]; j<=bookings[i][1]; j++){
            result[j-1] += bookings[i][2];
        }
    }
    // console.log(result);
    return result;
};