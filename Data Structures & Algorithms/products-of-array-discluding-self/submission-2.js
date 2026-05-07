class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const nlen = nums.length;
        const products = Array.from({ length: nlen }, () => 1);

        let prefixProd = 1;
        for (let i = 0; i < nums.length; i++) {
            products[i] = prefixProd;
            prefixProd *=  nums[i];
        }
        // console.log("prefixes: ", prefixes)
        // console.log("prefix products: ", products)
        
        let suffixProd = 1
        for (let i = nlen - 1; i >= 0; i--) {
            // console.log("suffixProd: ", suffixProd, " i: ", nums[i])
            products[i] *= suffixProd;
            suffixProd *= nums[i];
        }
        // console.log("suffixes: ", suffixes)
        // console.log("products: ", products)
        return products
    }
}
