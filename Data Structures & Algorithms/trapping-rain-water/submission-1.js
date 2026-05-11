class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let vol = 0;

        let l = 0,
            r = height.length - 1;
        
        let leftMax = height[l]
        let rightMax = height[r]
        
        while (l < r) {
            if(leftMax < rightMax) {
                l++;
                leftMax = Math.max(height[l], leftMax);
                // leftmax was lower, so calculate vol against it
                vol += leftMax - height[l]
            } else {
                r--;
                rightMax = Math.max(height[r], rightMax);
                // now right is lower (or equal), calculate on this
                vol += rightMax - height[r]
            }
        }

        return vol
    }
}
