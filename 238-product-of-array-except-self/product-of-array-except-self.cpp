class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int length = nums.size();
        vector <int> prefixSum(length);
        vector <int> suffixSum(length);
        vector <int> answer(length);
        //calculating prefix sum
        prefixSum[0]=1;
        for(int i = 1; i<length; i++){
            prefixSum[i] = nums[i-1] * prefixSum[i-1];
           

        }
        

        // calculating suffix sum
        suffixSum[length-1] = 1;
        for(int i = length-2; i>=0; i--){
            suffixSum[i] = nums[i+1] * suffixSum[i+1];
            cout << suffixSum[i]<<" ";
        }
        

        // calculating the sum
        for(int i=0; i<length ; i++){
            answer[i] =  prefixSum[i] * suffixSum[i];
        }

        return answer;

        
    }
    
};