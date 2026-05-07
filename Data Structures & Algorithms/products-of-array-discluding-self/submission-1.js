class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const products = Array.from({ length: nums.length });

        if(nums.length == 0) {
            return []
        }
        let prefixProd = nums[0];
        for (let i = 1; i < nums.length; i++) {
            products[i] = prefixProd;
            prefixProd = prefixProd * nums[i];
        }
        // console.log("prefixes: ", prefixes)
        // console.log("prefix products: ", products)
        
        let suffixProd = nums.at(-1)
        for (let i = nums.length - 2; i >= 0; i--) {
            console.log("suffixProd: ", suffixProd, " i: ", nums[i])
            products[i] = (products[i] ?? 1) * suffixProd;
            suffixProd = suffixProd * nums[i];
        }
        // console.log("suffixes: ", suffixes)
        // console.log("products: ", products)
        return products
    }
}
