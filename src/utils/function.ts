




/**
 * 
 * @param {string} txt - The input text to be sliced.
 * @param {number} [max = 50]  - The maximum length before truncation.
 * @returns The scliced text, with an ellipsis( ... ) appended if truncated.
 */
export function txtSlicer(txt: string, max: number = 100){
    if(txt.length > max) return `${txt.slice(0, max)} ...`
    return txt
}

