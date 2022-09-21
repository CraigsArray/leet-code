/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//Note: My first thought was to convert them into arrays as I hadn't worked with lists enough
//but we should maintain the linked-list datatype

/*
var addTwoNumbers = function(l1, l2) {
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
   You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//First medium question...will revisit to simplify
//Have to account for lots of edge cases..
 var addTwoNumbers = function(l1, l2) {
    if (!l1) return l2; //Best edge cases, if a list is empty, just return the other
    else if (!l2) return l1;
    let ansHead = l1;  //keep the ptr to l1, where we will put our solution
    let carry = 0;  //when sum > 10
    while(l1 !== null){  //cycle through till we get to the end of l1
        if(!l1.next && l2.next){  //if l1 ends before l2, we will add dummy nodes
            l1.next = new ListNode(0);
        }
        if(l1.next && !l2.next){  //same with l2
            l2.next = new ListNode(0);
        }
        var sum = l1.val + l2.val + carry;  //our sum is the 2 numbers + carry
        if(sum >= 10){  //when sum > 10, create a carry and change sum properly
            l1.val = sum - 10;
            carry = 1;
        }
        else{
            l1.val = sum;
            carry = 0;
        }
        var tempPtr = l1;  //holds the tail of l1
        l1 = l1.next;
        l2 = l2.next;     
    }
    if(carry){  //we ended with a carry, so the last sum was > 10! We need to add a node after the tail and change it's value
        tempPtr.val = sum - 10;
        let carryNode = new ListNode(1);  
        tempPtr.next = carryNode;
    }   
    return ansHead;
};
