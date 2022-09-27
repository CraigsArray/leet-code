/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * }; 
 * Given a file and assume that you can only read the file using a given method read4, implement a method to read n characters.
Method read4:
The API read4 reads four consecutive characters from file, then writes those characters into the buffer array buf4.
The return value is the number of actual characters read.
Note that read4() has its own file pointer, much like FILE *fp in C.
 * @param {function} read4()
 * @return {function}
 */
 var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let buf4 = []  //buf that changes each read
        let readLen  //How much was read
        while(n > 0){  //Still need to read more
          readLen = read4(buf4)  //Read from file, store into buf4, and how much was read into readLen
          buf4.length = Math.min(n, readLen)  //Shorten buf4 if only ready 1-3 chars
          buf.push(...buf4)  //build up buf with read read
          n -= 4  //decrement by 4 for each read
        } 
        return buf.length  //the buf is a destination, so just return its length
  };
        
};