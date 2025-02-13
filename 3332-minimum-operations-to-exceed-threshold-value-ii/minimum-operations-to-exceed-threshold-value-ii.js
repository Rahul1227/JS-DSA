/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    // Use a min-heap (priority queue) to efficiently manage the smallest elements
    const minHeap = new MinHeap();
    for (const num of nums) {
        minHeap.insert(num);
    }

    let counter = 0;

    // Continue until all elements in the heap are >= k
    while (minHeap.size() >= 2 && minHeap.peek() < k) {
        const a = minHeap.extractMin();
        const b = minHeap.extractMin();
        const newNum = a * 2 + b;
        minHeap.insert(newNum);
        counter++;
    }

    // If the smallest element is still less than k, it's impossible to satisfy the condition
    if (minHeap.peek() < k) {
        return -1; // Or handle as per problem requirements
    }

    return counter;
};

// MinHeap implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex === index) break;

            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
}