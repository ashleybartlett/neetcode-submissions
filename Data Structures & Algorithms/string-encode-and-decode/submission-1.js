const { Buffer } = require("node:buffer");

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // console.log("encode strs: ", strs);
        if (!strs) {
            // console.log("encode !strs");
            return "";
        }
        // always include a first entry, to ensure capture of empty arrays.
        const encoded = [`${strs.length}`];
        for (const s of strs) {
            if (!s) {
                encoded.push("");
            } else {
                encoded.push(Buffer.from(s).toString("base64"));
            }
        }
        // console.log(`encode encoded: [${encoded.length}]'${encoded}' joined: '${encoded.join("#")}'`);
        return encoded.join("#");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log("decode str: '", str, "'");
        if (!str || !str.length) {
            return [];
        }
        const decoded = [];
        // console.log("decode splitstr: '", str.split("#"), "'")
        const [_, ...entries] = str.split("#")

        for (const s of entries) {
            if (!s) {
                decoded.push("");
            } else {
                decoded.push(Buffer.from(s, "base64").toString("utf-8"));
            }
        }
        // console.log("decode decoded: ", decoded);
        return decoded;
    }
}
