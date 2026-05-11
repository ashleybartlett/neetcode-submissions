class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        const prefix = Array.from({length: height.length})
        const suffix = Array.from({length: height.length})
        let leftMax = height[0]
        let rightMax = height.at(-1);
        for(let l = 0, r = height.length - 1; l < height.length; l++, r--) {
            leftMax = Math.max(leftMax, height[l])
            prefix[l] = leftMax;

            rightMax = Math.max(rightMax, height[r])
            suffix[r] = rightMax;
        }

        let vol = 0
        
        for(let i = 0; i < height.length; i++) {
            vol += Math.min(prefix[i], suffix[i]) - height[i]
        }
        return vol
    }
}
