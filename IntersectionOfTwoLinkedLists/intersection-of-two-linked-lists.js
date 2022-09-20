/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
 * If the two linked lists have no intersection at all, return null.
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//Hash Map approach
 var getIntersectionNode = function(headA, headB) {
    const map = new Set();
    
    while(headA){  //build our hashmap with A
        map.add(headA);
        headA = headA.next;
    }
    while(headB){  //continue to build until we run into a node we've seen before
        if(map.has(headB)) return headB;
        map.add(headB);
        headB = headB.next;
    }
    return null;
};
//Adding a property
var getIntersectionNode = function(headA, headB) {    
    while(headA){
        headA.seen = true;  //add property and go through all of A
        headA = headA.next;
    }
    while(headB){  //while going through B, look for a node that's been seen before
        if(headB.seen) return headB;
        headB = headB.next;
    }
    return null;
};