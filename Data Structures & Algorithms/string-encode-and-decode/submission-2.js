const SEPERATOR = "#"
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // Realised this was more of a buffer encoding, rather than actual string. 

        let encoded = ""
        for(const s of strs) {
            encoded += `${s.length}${SEPERATOR}${s}`
        }
        // console.log(`encoded: '${encoded}'`)
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = []
        let buffer = ""
        for (let pointer = 0;  pointer < str.length;) {
            let char = str[pointer];    
            if (char == SEPERATOR) {
                // finished getting number
                const wordLength = Number(buffer)
                // reset the buffer

                pointer += SEPERATOR.length; // get past the separator
                buffer = str.substring(pointer, pointer + wordLength)

                // console.log(`decode found word: ${buffer}`)
                // console.log(`decode debug: pointer: ${pointer}, length: ${wordLength}`)
                decoded.push(buffer)
                
                // reset the buffer
                buffer = ""
                pointer += wordLength
                // console.log("decode char at pointer: ", str[pointer])
            } else {
                pointer++;
                buffer += char
            }
        }
        return decoded
    }
}
