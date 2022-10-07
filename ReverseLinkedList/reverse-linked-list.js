/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */
 //Runtime: O(n) - iterate through list once
 var reverseList = function(head) {
    let curr = head;  //2 ptr solution
    let prev = null;  //prev node
    while(curr){
        let tempNext = curr.next;  //hold pointer to next node before breaking link
        curr.next = prev;   //break link, change pointer to go backwards
        prev = curr;        //move prev forwards
        curr = tempNext;    //move curr forwards, luckily we saved the pointer
    }
    return prev;  //curr = null, prev will be at head
    
};