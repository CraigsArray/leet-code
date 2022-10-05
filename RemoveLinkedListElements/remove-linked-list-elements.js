/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    let newHead = head;  //Hold the head location
    while(head !== null){  //Loop through the list
        
        if(head.val === val){            
            if(head !== undefined) prev.next = head.next;
            if(head === newHead) newHead = head.next;                  
        }
        else{
            prev = head;
        }
        head = head.next;   
    }
    return newHead;
};