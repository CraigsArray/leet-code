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
 
   Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
   //Runtime - O(n). Loop through the size of input once.
 */
   var removeElements = function(head, val) {
    let newHead = head;  //Hold the head location

    while(head !== null){  //Loop through the list        
        if(head.val === val){  //Uh-oh. We need to remove this element.          
            if(head !== undefined) prev.next = head.next;  //to "remove", we have the prev node point past this node to the next
            if(head === newHead) newHead = head.next;  //But what if we remove the head? We change the new head as well   
        }
        else{
            prev = head;  //we only want to change the previous node when it's "safe". 
        }
        head = head.next;   //Go to next item
    }
    return newHead;  //return our list that starts with newHead
};