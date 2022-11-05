/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//Runtime: O(2n) -> O(n);
 var isPalindrome = function(head) {
    var vals = []; 
    while(head){
        vals.push(head.val);
        head = head.next;
    }
    let [i, j] = [0, vals.length - 1];
    while(i < j){
        if (vals[i] !== vals[j]) return false;
        i++;
        j--;
    }
    return true;

};