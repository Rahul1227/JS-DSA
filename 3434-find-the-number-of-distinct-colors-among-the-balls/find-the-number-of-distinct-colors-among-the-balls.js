/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    if (!queries) return null;

    let ballToColor = new Map();  // Maps balls to their colors
    let colorCount = new Map();   // Tracks the frequency of each color
    let result = [];
    let uniqueColors = 0;         // Tracks the number of unique colors

    for (let [ball, color] of queries) {
        // If the ball already has a color, decrement the count of the old color
        if (ballToColor.has(ball)) {
            let oldColor = ballToColor.get(ball);
            colorCount.set(oldColor, colorCount.get(oldColor) - 1);
            if (colorCount.get(oldColor) === 0) {
                uniqueColors--;  // If the old color count drops to 0, it's no longer unique
            }
        }

        // Assign the new color to the ball
        ballToColor.set(ball, color);

        // Increment the count of the new color
        if (!colorCount.has(color)) {
            colorCount.set(color, 0);
        }
        colorCount.set(color, colorCount.get(color) + 1);

        // If the new color count is 1, it's a new unique color
        if (colorCount.get(color) === 1) {
            uniqueColors++;
        }

        // Push the current number of unique colors to the result
        result.push(uniqueColors);
    }

    return result;
};