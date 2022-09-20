/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//Feels like cheating...check if visited, else changed value to visited
 var hasCycle = function(head) {   
    while(head){
        if(head.val === 'visited') return true;
        head.val = 'visited';       
        head = head.next;
    }
    return false;
};

//Add a property
var hasCycle = function(head) {
    let map = {};
    while(head !== null){
        if(head.seen) return true;
        head.seen = true;
        head = head.next;
    }
    return false;
};

//Hash map
var hasCycle = function(head) {
    const seen = new Set();
     
     while(head) {
         if(seen.has(head)) return true;  //does hash map have node already?
         if(!head) return false;    //we reached an end node, no loops
         seen.add(head);  //add node to hash map
         head = head.next;
     }
     return false;
 };