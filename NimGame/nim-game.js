/**
 * @param {number} n
 * @return {boolean}
 */
 // 292. Nim Game
 // Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.
 // Complexity: O(1)
 var canWinNim = function(n) {
    return (n % 4 !== 0)
};